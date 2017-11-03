class DynamicTabSheet extends React.Component{
    constructor(props){
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);

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
        let db = new PouchDB("schemas")

        db.query("schemas/by_name", function(err, res){
            if(err){
                console.error(err);
            }
            else{
                let tbs = [];
                let content = [];
                res.rows.map(function(key){
                    tbs = this.state.tabs;
                    tbs.push(<li key={key.key} role="presentation"><a href={"#"+key.key} aria-controls="diagrams" role="tab" data-toggle="tab">{key.key}</a></li>);

                    content = this.state.tabContent;
                    content.push(<div key={key.key} role="tabpanel" className="tab-pane" id={key.key} data-objid={key.id}><GenericLister id={key.id}/></div>);

                }.bind(this));

                tbs.push(<li key="schema" role="presentation"><a href={"#schema"} aria-controls="diagrams" role="tab" data-toggle="tab">Objects</a></li>);
                content.push(<div key={"schema"} role="tabpanel" className="tab-pane" id="schema"><SchemaLister/><NewSchemaForm/></div>);
                this.setState({
                    tabs:tbs,
                    tabContent: content
                });
            }
        }.bind(this))
    }
}