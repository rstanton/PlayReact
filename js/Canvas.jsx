class Canvas extends React.Component {

    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this)
        this.init = this.init.bind(this);
        this.getSchemas = this.getSchemas.bind(this);
        this.getTemplate = this.getTemplate.bind(this);
        this.getObjects = this.getObjects.bind(this);

        this.schemas = [];
        this.template = {};
        this.diagrams = [];
        this.objects = {};
        this.view = {};

        this.init();
    }

    componentDidMount() {
        let width = 3000;
        let height = 3000;

        this.view = new View(this.props.id, width, height);
        this.view.setScrollArea("#" + this.props.id);



    }


    getSchemas(){
        let db = new PouchDB(SCHEMA_DB);

        db.query(SCHEMA_ALL_VIEW, function(err,res){
            if(err) {
                console.log(err)
            }
            else {
                let schemas = res.rows.map(function (obj) {
                    return obj;
                }.bind(this));

                this.schemas = schemas;

                db = null;
            }
        }.bind(this));
    }

    getTemplate(templateName){
        let db = new PouchDB(OBJECT_DB);

        //Get the template for the diagram
        console.log("Loading Template: "+templateName);

        db.query(OBJECT_BY_TYPE, {keys: [templateName, "http://architecture.com/Template"]}, function(err,res){
            if(err)
                console.error(err);
            else{
                this.template = res.rows[0].value;
                this.getObjects(this.template.allowedObjects);
            }
        }.bind(this));
    }

    /**
     *
     * @param allowedObjects A list of string which represents the 'type' of allowed objects, eg "http://architecture.com/Application"
     */
    getObjects(allowedObjects){
        let db = new PouchDB(OBJECT_DB);

        allowedObjects.map(function(obj){
            db.query(OBJECT_BY_TYPE, {key: obj}, function (err, res) {
                if (err)
                    console.error(err);
                else {
                    let list = res.rows.map(function (row) {
                        return row.value;
                    });

                    this.objects[obj] = list;
                }
            }.bind(this));
        }.bind(this))
    }
    /**
     * Read all the schemas and make them available to the rest of the app
     * @ToDo ... parameterise, hardcoded at the minute
     */
    init(){
        this.getSchemas();
        this.getTemplate("App Comms Diagram Template");
    }

    render() {
        let canvasStyle = {
            width: "3000px",
            height: "3000px"
        };

        let floatStyle = {
            position: "sticky",
            left: "10px",
            top: "10px",
            zIndex:"1000"
        };

        return <div id="container" className={"container-fluid"}>
            <ReuseDialog id={"reuseDialog"} title={"Reuse Objects"} modal={false}/>
            <div id={this.props.id + "_container"}>
                <div style={canvasStyle} id={this.props.id} className={"ui-droppable"}/>
            </div>
        </div>;
    }
}

ReactDOM.render(
    <div>
        <Canvas id="canvas"/>
    </div>,
    document.getElementById('root')
);
