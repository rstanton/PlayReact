/**
 * Props will contain the ID of the schema object that describes the resource to be displayed
 * - Get the schema
 * - Open a connection to the relevant database
 * - Query for all objects
 * - Display a table containing the relevant properties
 */
class GenericLister extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getSchema = this.getSchema.bind(this);
        this.getData = this.getData.bind(this);
        this.showDialog = this.showDialog.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            head: [],
            body: [],
            dialog: ""
        };
    }

    componentDidMount(){
        //Reads the table header and passes the schema doc to 'getData'
        this.getSchema(this.getData);
    }

    //@ToDo finish building table data rows
    getData(schema){
        this.setState({
            body:[]
        });

        console.debug(JSON.stringify(schema));

        let db = new PouchDB(schema.title);


        //The view now returns all of the documents (not the IDs)
        db.query(schema.title+"/by_name", function(err,res){
            if(err){
                console.error(err);
            }
            else{
                let body = [];

                //Loop each record in the DB
                let key =0;
                res.rows.map(function(doc){
                    console.debug(schema.title+", Processing Lister for "+JSON.stringify(doc.key));

                    let obj = doc.key;
                    let td = [];

                    //@Todo, need to use the schema here -> we need to get the attributes of the document based on the fields in the schema, can't just iterate over the object as there maybe missing / null fields.
                    for(let field in schema.properties){
                        console.debug("Processing "+ JSON.stringify(field));

                        td.push(<td key={schema.title+"."+field}>{eval("obj."+field)}</td>);
                    }

                    //
                    body.push(<tr key={key}>
                        {td}
                        <td>
                            <span onClick={() => this.delete(schema, doc.id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </td></tr>);

                    key++;
                }.bind(this));

                this.setState({
                    body:body
                });
            }
        }.bind(this));
    }

    /**
     * Remove the object from the DB associated with the Schema
     *
     * @param schema
     * @param id
     */
    delete(schema, id){
        console.debug("Delete "+schema.title+" with ID "+id);
        let db = new PouchDB(schema.title);

        db.get(id, function(err, doc){
            db.remove(doc, function(err, response){
                if(err)
                    console.error(err);

                this.getData(schema);
            }.bind(this));
        }.bind(this));
    }


    /**
     * Read the schema from the DB, display the table header and call on to next which should render the data table.
     *
     * @param next
     */
    getSchema(next){
        this.setState({
            head:[],
            dialog:""
        });

        let db = new PouchDB(SCHEMA_DB);

        db.get(this.props.id, function(err, doc){
            if(err){
                console.error(err);
            }
            else{
                console.debug("Building Table Header for "+JSON.stringify(doc));

                //Setup a new dialog
                $("#dialog"+doc.title).dialog("destroy"); //JQuery wraps the dialog in tons of gumpf which breaks react. Have to destroy the previous dialog if it exists!

                //let dialog = <GenericDialog key={"dialog"+doc.title} next={this.getData} id={"dialog"+doc.title} title={"New "+ doc.title} modal={true} schema={doc}/>;
                let dialog = <DynamicDialog next={this.getData} id={"dialog"+doc.title} title={"New Object"} modal={true}/>
                let props = doc.properties;

                let th=[];
                for(let field in props){
                    th.push(<th key={field}>{field}</th>);
                }

                let button = <th key="button"><button onClick={() => this.showDialog("dialog"+doc.title)} className="btn btn-primary">{"New "+doc.title}</button></th>;
                th.push(button);

                this.setState({
                    head:th,
                    dialog:dialog
                });
            }
            //now populate the data table
            next(doc);
        }.bind(this));
    }

    showDialog(id){
        console.debug("Showing dialog with ID "+id);

        $("#"+id).dialog("open");
    }

    render(){
        return <div>
            {this.state.dialog}
            <table className="table table-striped">
                <thead>
                <tr>{this.state.head}</tr>
                </thead>
                <tbody>
                {this.state.body}
                </tbody>
            </table>
        </div>
    }
}