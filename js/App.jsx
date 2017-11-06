var diagramDB;

/**
 * This is the entry point to the 'admin' application
 *
 * @ToDo - Rethink the relationship model, It doesn't have the same logic as plain objects, so needs it's own management.
 * @ToDo - diagrams, do they start as objects?
 */
class App extends React.Component{
    constructor(props){
        super(props);

        diagramDB = new PouchDB(DIAGRAM_DB);

        this.init = this.init.bind(this);
        this.createSchemaView = this.createSchemaView.bind(this);

        this.init();

        this.state = {
            view: ""
        }

    }


    /**
     * This needs to read all the schemas and create the relevant views
     */
    init(){
        let db = new PouchDB(SCHEMA_DB);

        db.info(function(err, info){
            if(info.doc_count==0 && info.update_seq==0){

                //Hacky, but create the view for the Schema DB
                this.createSchemaView({title:"Schema"});

                //For each of the out of the box schemas
                baseSchemas.map(function(schema){
                    console.log("Creating DB and View for "+schema.title);

                    //Create the schema record
                    db.post(schema, function(err, doc){
                        //create the map/reduce view
                        this.createSchemaView(schema);
                    }.bind(this));
                }.bind(this));

            }
            else{ //Database already exists, nothing to do, just show the tabs
                this.setState({
                    view:<DynamicTabSheet/>
                });
            }
        }.bind(this));
    }

    /**
     * Creates the actual views
     * @param doc The schema 'by_name' results doc, contains 'key' (title of the schema eg 'Application') and 'id'
     */
    createSchemaView(schema){
        let db = new PouchDB(schema.title);

        var designDoc = {
            _id:'_design/'+schema.title,
            views:{
                by_name:{
                    map:function(doc) {
                        emit(doc);
                    }.toString()
                }
            }
        };

        db.put(designDoc, function(err, resp){
            if(err) {
                if (err.status != 409)
                    console.error(err);
            }
            else {
                console.log("Index for " + schema.title + " created.");
                
                this.setState({
                    view: <DynamicTabSheet/>
                });
            }
        }.bind(this));
    }


    /**
     * Adds the navigation, adds a hidden modal for new applications, shows the tabbed screen
     * @returns {XML}
     */
    render(){
        return <div>
            <div className="container">
                {this.state.view}
            </div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


