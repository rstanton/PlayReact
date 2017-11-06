class DynamicTabSheet extends React.Component{
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getObjectTypes = this.getObjectTypes.bind(this);

        //tabs the HTML for the tabs, and tabContent the HTML for the tab bodies
        this.state = {
            tabs:[],
            tabContent:[]
        }
    }

    componentDidMount(){
        this.getObjectTypes();
    }

    render(){
        return <div id="tabs">
            <ul className="nav nav-tabs" role="tablist">
                {this.state.tabs}
            </ul>

            <div className="tab-content">
                {this.state.tabContent}
            </div>
        </div>
    }

    /**
     * Get the objects types from the DB, assign the names and the IDs to some elements by updating the state.
     */
    getObjectTypes(){
        let db = new PouchDB(SCHEMA_DB);

        this.setState({
            tabs:[],
            tabContent:[]
        });

        db.query("Schema/by_name", function(err, res){
            if(err){
                console.error(err);
            }
            else{
                let tbs = [];
                let content = [];

                //Loop each of the Schema objects returned from the Schema DB query
                res.rows.map(function(schema){
                    console.debug("Creating Sheet for "+JSON.stringify(schema));

                    //Add a tab
                    tbs = this.state.tabs;
                    tbs.push(<li key={schema.key._id} role="presentation"><a href={"#"+schema.key._id} aria-controls="diagrams" role="tab" data-toggle="tab">{schema.key.title}</a></li>);

                    //add tab content
                    content = this.state.tabContent;
                    content.push(<div key={schema.key._id} role="tabpanel" className="tab-pane" id={schema.key._id}>
                        <GenericLister id={schema.key._id} next={this.getObjectTypes}/>
                    </div>);

                }.bind(this));

                tbs.push(<li key="schema" role="presentation"><a href={"#schema"} aria-controls="diagrams" role="tab" data-toggle="tab">Objects</a></li>);
                content.push(<div key={"schema"} role="tabpanel" className="tab-pane" id="schema">
                    <SchemaLister next={this.getObjectTypes} />
                    <NewSchemaForm next={this.getObjectTypes}/>
                </div>);

/**                tbs.push(<li key="diagrams" role="presentation"><a href={"#diagrams"} aria-controls="diagrams" role="tab" data-toggle="tab">Diagrams</a></li>);
                content.push(<div key="diagrams" role="tabpanel" className="tab-pane" id="diagrams"><DiagramLister/></div>);*/

                this.setState({
                    tabs:tbs,
                    tabContent: content
                });
            }
        }.bind(this))
    }
}