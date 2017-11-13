/**
 * This is the entry point to the 'admin' application
 *
 */
class App extends React.Component{
    constructor(props){
        super(props);

        this.init = this.init.bind(this);
        this.createSchemaView = this.createSchemaView.bind(this);

        this.init();

        this.state = {
            view: ""
        };
    }


    /**
     * This needs to read all the schemas and create the relevant views
     */
    init() {
        let db = new PouchDB(OBJECT_DB);

        db.info(function (err, info) {
            if (info.doc_count == 0 && info.update_seq == 0) {
                console.debug("First Boot. Setting up...");

                //Hacky, but create the view for the Schema DB
                this.createSchemaView({title: "Schema"});
                this.createSchemaView({title: "Config"});
                this.createSchemaView({title: "Object"});
            }

            //Database already exists, nothing to do, just show the tabs
            this.setState({
                view: <DynamicTabSheet/>
            });
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
                by_type:{
                    map:function(doc) {
                        if(doc.type) {
                            emit(doc.type, doc);
                        }
                    }.toString()
                },
                by_name_and_type:{
                    map:function(doc){
                        if(doc.type)
                            emit(doc.title, doc);

                        if(doc.name)
                            emit(doc.name, doc);
                    }.toString()
                },
                all:{
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


