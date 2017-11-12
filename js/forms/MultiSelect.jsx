/**
 * @Todo there's a bug with single entry lists, the value never gets saved because the user never selects anything.
 */
class Select extends React.Component{
    constructor(props) {
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.buildList = this.buildList.bind(this);
        this.getObjectsByID = this.getObjectsByID.bind(this);
        this.buildOption = this.buildOption.bind(this);

        this.state = {
            list: []
        };

        this.list = [];

    }

    componentDidMount(){
        this.buildList();
    }

    render(){
        console.debug("Building Select for "+this.props.field+", with value '"+JSON.stringify(this.props.value)+"'");

        return <select id={"select" + this.props.field} value={this.props.value} data-field={this.props.field} onChange={this.props.handleSelect} className="list-group" multiple={this.props.multi}>
                {this.state.list}
            </select>;

    }

    buildList(){
        let arr = [];
        console.debug("Building List for "+this.props.target);

        if(this.props.target == "http://architecture.com/Object"){
            //Use the known list of all user-configured schemas
            this.list = this.props.list;
            this.buildOption();
        }
        else if(this.props.target){
            //Lookup all objects of the given type.
            this.getObjectsByID(this.props.target, this.buildOption);
        }
        else{
            this.list= this.props.list;
            this.buildOption();
        }
    }

    buildOption(){
        console.debug("Building List Output for "+JSON.stringify(this.list));

        //Build the list option, set the type to the ID of the selected object
        let list = this.list.map(function(schema) {
            //return <button key={schema.title} type="button" className="list-group-item" data-schema={schema} onClick={this.props.onValueSelect}>{schema.title}</button>
            return <option className="list-group-item" key={schema.title} value={schema.id} data-title={schema.title} data-type={schema.id} data-field={this.props.field}>{schema.title}</option>;
        }.bind(this));

        this.setState({
            list: list
        });
    }

    //@ToDo externalise to db handling object
    getObjectsByID(id, next){
        let db = new PouchDB(OBJECT_DB);
        console.debug("Getting Objects for type "+id);

        db.query(OBJECT_BY_TYPE, {key: id}, function(err, res) {
            if(err)
                console.error(err);
            else{
                console.debug("Got "+res.rows.length+" for "+id);

                let list = res.rows.map(function(obj){
                    console.log("Processing List Option for "+id+" based on object "+JSON.stringify(obj));

                    return {
                        title: obj.value.name,
                        id: obj.value.type
                    };
                });

                console.log("Got "+JSON.stringify(list)+" as items for "+id);

                this.list = list;

                next();
            }
        }.bind(this));
    }
}