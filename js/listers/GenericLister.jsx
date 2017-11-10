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

    getData(){
        this.setState({
            body:[]
        });

        //@ToDo, open the object DB, not the Schema DB
        let db = new PouchDB(OBJECT_DB);
        let schema = this.props.schema;

        //The view now returns all of the documents (not the IDs)
        db.query("Object/by_name", {key: schema.title }, function(err,res){
            if(err){
                console.error(err);
            }
            else{
                console.debug("Got "+res.rows.length+" of "+schema.title);
                let body = [];

                //Loop each record in the DB
                let key =0;
                res.rows.map(function(doc){
                    console.debug(schema.title+", Processing Lister for "+JSON.stringify(doc));

                    let obj = doc.value;
                    let td = [];

                    for(let field in schema.properties){
                        td.push(<td key={schema.title+"."+field}>{obj[field]}</td>);
                    }

                    //
                    body.push(<tr key={key}>
                        {td}
                        <td>
                            <span onClick={() => this.delete(doc.id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span>
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
    delete(id){
        console.debug("Delete "+this.props.schema.title+" with ID "+id);
        let db = new PouchDB(OBJECT_DB);

        db.get(id, function(err, doc){
            db.remove(doc, function(err, response){
                if(err)
                    console.error(err);

                this.getData();
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

        let schema = this.props.schema;

        //Setup a new dialog
        $("#dialog"+schema.title).dialog("destroy"); //JQuery wraps the dialog in tons of gumpf which breaks react. Have to destroy the previous dialog if it exists!

        let dialog = <DynamicDialog allSchemas={this.props.allSchemas} schema={this.props.schema} next={this.getData} id={"dialog"+schema.title} title={"New "+schema.title} modal={true}/>
        let props = schema.properties;

        let th=[];
        for(let field in props){
            th.push(<th key={field}>{field}</th>);
        }

        let button = <th key="button"><button onClick={() => this.showDialog("dialog"+schema.title)} className="btn btn-primary">{"New "+schema.title}</button></th>;
        th.push(button);

        this.setState({
            head:th,
            dialog:dialog
        });

        //now populate the data table
        next();
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