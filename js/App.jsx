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

        diagramDB = new PouchDB("diagrams");

        this.init = this.init.bind(this);
        this.createSchemaView = this.createSchemaView.bind(this);
        this.getSchemas = this.getSchemas.bind(this);

        this.init();
    }


    /**
     * This needs to read all the schemas and create the relevant views
     */
    init(){
        this.getSchemas(this.createSchemaView);
    }

    /**
     * This retrieves all schemas....
     * @ToDo move this to utility class so it can be re-used?
     * @param next
     */
    getSchemas(next) {
        let db = new PouchDB("schemas");

        db.query("schemas/by_name", function (err, res) {
            if (err) {
                console.error(err);
            }
            else {
                res.rows.map(function(key){
                    next(key);
                });
            }
        }.bind(this));
    }

    /**
     * Creates the actual views
     * @param doc The schema 'by_name' results doc, contains 'key' (title of the schema eg 'Application') and 'id'
     */
    createSchemaView(doc){
        let db = new PouchDB(doc.key);

        var designDoc = {
            _id:'_design/'+doc.key,
            views:{
                by_name:{
                    map:function(doc) {
                        emit(doc);
                    }.toString()
                }
            }
        };

        db.put(designDoc, function(err, doc){
            if(err) {
                if (err.status != 409)
                    console.error(err);
            }
            else
                console.log("Index for "+designDoc.key+" created.");
        });

    }


    /**
     * Adds the navigation, adds a hidden modal for new applications, shows the tabbed screen
     * @returns {XML}
     */
    render(){
        return <div>
            <div className="container">
                <DynamicTabSheet/>
            </div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


