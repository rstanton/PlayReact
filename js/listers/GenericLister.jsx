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
        console.debug(JSON.stringify(schema));

        let db = new PouchDB(schema.title);


        //execute the view to get the IDs of all the documents
        db.query(schema.title+"/by_name", function(err,res){
            if(err){
                console.error(err);
            }
            else{
                let body = [];

                //Loop each record in the DB
                let key =0;
                res.rows.map(function(doc){
                    console.debug(schema.title+", Processing Lister for "+JSON.stringify(doc));

                    let obj = doc.key;
                    let td = [];

                    //@Todo, need to use the schema here -> we need to get the attributes of the document based on the fields in the schema, can't just iterate over the object as there maybe missing / null fields.
                    for(let field in schema.properties){
                        td.push(<td key={schema.title+"."+field}>{eval("obj."+field)}</td>);
                    }

                    body.push(<tr key={key}>{td}<td><span onClick={() => this.delete(schema, doc.id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span></td></tr>);
                    key++;
                }.bind(this));

                this.setState({
                    body:body
                });
            }
        }.bind(this));
    }

    delete(schema, id){
        console.debug("Delete "+schema.title+" with ID "+id);
        let db = new PouchDB(schema.title);

        db.get(id, function(err, doc){
            db.remove(doc, function(err, response){
                if(err)
                    console.error(err);

                db.close();

                this.getData(schema);
            }.bind(this));
        }.bind(this));
    }


    //Read the schema from the DB, display the table header and call on to next which should render the data table.
    getSchema(next){
        let db = new PouchDB("schemas");

        db.get(this.props.id, function(err, doc){
            if(err){
                console.error(err);
            }
            else{
                console.debug("Building Table Header for "+JSON.stringify(doc));

                //Setup a new dialog
                let dialog = <GenericDialog next={this.getData} id={"dialog"+doc._id} body={"New "+doc.title} modal={true} schema={doc}/>;

                let props = doc.properties;

                let th=[];
                for(let x in props){
                    th.push(<th key={x}>{x}</th>);
                }

                let button = <th key="button"><button onClick={() => this.showDialog("dialog"+doc._id)} className="btn btn-primary">{"New "+doc.title}</button></th>;
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