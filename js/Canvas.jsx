class Canvas extends React.Component {

    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this)
        this.init = this.init.bind(this);

        this.schemas = [];
        this.view = {};

        this.init();
    }



    componentDidMount() {
        let width = 3000;
        let height = 3000;

        this.view = new View(this.props.id, width, height);
        this.view.setScrollArea("#" + this.props.id);
    }

    /**
     * Read all the schemas and make them available to the rest of the app
     */
    init(){
        let db = new PouchDB(SCHEMA_DB);

        db.query(SCHEMA_ALL_VIEW, function(err,res){
            console.debug("Got "+res.rows.length+" schemas");

            let schemas = res.rows.map(function(obj){
                return obj;
            }.bind(this));

            this.schemas = schemas;

            db = null;
        }.bind(this));
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

        return <div>
            <span style={floatStyle} className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <NavBar/>
            <div id={this.props.id + "_container"}>
                <div style={canvasStyle} id={this.props.id}/>
            </div>
        </div>
    }
}

ReactDOM.render(
    <div>
        <Canvas id="canvas"/>
    </div>,
    document.getElementById('root')
);
