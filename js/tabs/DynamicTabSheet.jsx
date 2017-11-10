class DynamicTabSheet extends React.Component{
    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.getObjectTypes = this.getObjectTypes.bind(this);

        //tabs the HTML for the tabs, and tabContent the HTML for the tab bodies
        this.state = {
            tabs: [],
            tabContent: []
        };

        this.allSchemas = [];
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

        //Get all the object types that the user has configured and create a tab for each one.
        db.query(SCHEMA_ALL_VIEW, function(err, res){
            if(err){
                console.error(err);
            }
            else{
                let tbs = [];
                let content = [];

                this.allSchemas = res.rows.map(function(obj){
                    return obj.key;
                });

                //Loop each of the Schema objects returned from the Schema DB query
                res.rows.map(function(schema){
                    console.debug("Creating Sheet for "+JSON.stringify(schema));

                    //Add a tab
                    tbs = this.state.tabs;
                    tbs.push(<li key={schema.key.title} role="presentation"><a href={"#"+schema.key.title} aria-controls="diagrams" role="tab" data-toggle="tab">{schema.key.title}</a></li>);

                    //add tab content, use the lister component to update
                    content = this.state.tabContent;
                    content.push(<div key={schema.key.title} role="tabpanel" className="tab-pane" id={schema.key.title}>
                        <GenericLister allSchemas={this.allSchemas} schema={schema.key} id={schema.key.title} next={this.getObjectTypes}/>
                    </div>);

                }.bind(this));


                /** Objects **/
                tbs.push(<li key="schema" role="presentation"><a href={"#schema"} aria-controls="diagrams" role="tab" data-toggle="tab">Objects</a></li>);

                content.push(<div key={"schema"} role="tabpanel" className="tab-pane" id="schema">
                    <SchemaLister next={this.getObjectTypes} />
                    <NewSchemaForm next={this.getObjectTypes}/>
                </div>);

                //Add tabs and tab content for diagrams and relationships
                tbs.push(<li key="relationships" role="presentation"><a href={"#"+relationshipSchema.title} aria-controls="diagrams" role="tab" data-toggle="tab">Relationships</a></li>);
                content.push(<div key={relationshipSchema.title} role="tabpanel" className="tab-pane" id={relationshipSchema.title}>
                    <GenericLister allSchemas={this.allSchemas} schema={relationshipSchema} id={relationshipSchema.title} next={this.getObjectTypes}/>
                </div>);

                tbs.push(<li key="diagrams" role="presentation"><a href={"#"+diagramSchema.title} aria-controls="diagrams" role="tab" data-toggle="tab">Diagrams</a></li>);
                content.push(<div key={diagramSchema.title} role="tabpanel" className="tab-pane" id={diagramSchema.title}>
                    <GenericLister allSchemas={this.allSchemas} schema={diagramSchema} id={diagramSchema.title} next={this.getObjectTypes}/>
                </div>);


                console.log("Adding Templates");
                tbs.push(<li key="templates" role="presentation"><a href={"#"+templateSchema.title} aria-controls="diagrams" role="tab" data-toggle="tab">Templates</a></li>);
                content.push(<div key={templateSchema.title} role="tabpanel" className="tab-pane" id={templateSchema.title}>
                    <GenericLister allSchemas={this.allSchemas} schema={templateSchema} id={templateSchema.title} next={this.getObjectTypes}/>
                </div>);


                /**tbs.push(<li key="diagrams" role="presentation"><a href={"#diagrams"} aria-controls="diagrams" role="tab" data-toggle="tab">Diagrams</a></li>);
                content.push(<div key="diagrams" role="tabpanel" className="tab-pane" id="diagrams"><DiagramLister/></div>);**/

                this.setState({
                    tabs:tbs,
                    tabContent: content
                });
            }
        }.bind(this))
    }
}