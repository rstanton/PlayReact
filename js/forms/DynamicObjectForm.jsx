/**
 * Builds an input for for a given schema (this.props.schema)
 */
class DynamicObjectForm extends React.Component{
    constructor(props) {
           super(props);

        this.buildInputForm = this.buildInputForm.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.initiateState = this.initiateState.bind(this);

        this.state = {};
        this.list = [];

    }

    componentDidMount(){
        this.initiateState();
    }

    render() {
        let fields = this.buildInputForm();
        let form = <form action="#" onSubmit={this.handleSubmit}>
            <div className="form-group">
                {fields}
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>;

        return form;
    }

    initiateState(){
        let props = this.props.schema.properties;

        for(let field in props){
            this.setState({
                [field]:[]
            });
        }
    }

    buildInputForm(){
        console.log("Building Input Form for "+JSON.stringify(this.props.schema));

        let inputFields = [];
        let props = this.props.schema.properties;

        //@Todo this needs to support all JSON Schema type fields

        for(let field in props){
            console.debug("Building Form element for "+field +" for type: "+JSON.stringify(props[field]));

            let obj = props[field];

            if(obj.hide)
                continue;

            let displayName = field;
            if(obj.displayName){
                displayName = obj.displayName;
            }

            if(obj.type.localeCompare("string")==0) {
                inputFields.push(<div key={field}>
                    <label htmlFor={"input" + field}>{displayName}</label>
                    <input type="text" value={this.state[field]} onChange={this.handleChange} className="form-control" placeholder={"input " + field} id={field} data-field={field}/>
                </div>);
            }
            else if(obj.type.localeCompare("object")==0){
                //Handle refs by doing a lookup.
                inputFields.push(<div key={field}><label htmlFor={"input"+field}>{displayName}</label>
                    <Select value={this.state[field]} multi={false} handleSelect={this.handleSelect} field={field} target={obj.$ref} list={this.props.allSchemas}/>
                </div>);
            }
            else if(obj.type.localeCompare("array")==0) {
                inputFields.push(<div key={field}><label htmlFor={"input"+field}>{displayName}</label>
                    <div className="form-inline">
                        <div className="form-group">
                            <Select value={this.state[field]} multi={true} handleSelect={this.handleSelect} field={field} target={obj.$ref} list={this.props.allSchemas}/>
                        </div>
                    </div>
                </div>);
            }
        }

        return inputFields;
    }

    //@Todo externalise to db object
    handleSubmit(event){
        let db = new PouchDB(OBJECT_DB);

        this.state.type = this.props.schema.id;

        console.log("Writing new Object: "+JSON.stringify(this.state));

        db.post(this.state, function(err, res){
            if(err)
                console.error(err);
            else{
                $("#"+this.props.dialogId).dialog("close");

                this.initiateState();

                //Callback
                this.props.next();
            }
        }.bind(this));
    }

    handleChange(event){
        const field = [$("#"+event.target.id).data("field")];

        console.debug("Value change in "+field+", updating state");

        //let obj = this.state.object;
        //obj[field] = event.target.value;

        this.setState({
            [field]:event.target.value
        });

        console.log("New State: "+JSON.stringify(this.state));
    }

    handleSelect(event){
        const field = [$("#"+event.target.id).data("field")];
        console.debug("Value change in "+field+", updating state");

        const options = event.target.selectedOptions;

        let list = [];
        for(let x of options){
            const title = x.attributes["data-title"].value;
            const type = x.attributes["data-type"].value;

            list.push(type);

            let obj={};
            obj.title = title;
            obj.type = type;

            this.list.push(obj);

        }

        //let obj = this.state.object;
        //obj[field] = list;
        //console.log("Setting new Object State: "+JSON.stringify(obj));

        this.setState({
            [field]: list
        });

        console.log("New State: "+JSON.stringify(this.state));
        console.log("New List: "+JSON.stringify(this.list));
    }
}