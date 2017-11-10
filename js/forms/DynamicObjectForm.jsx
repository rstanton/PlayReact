class DynamicObjectForm extends React.Component{
    constructor(props) {
        super(props);

        this.buildInputForm = this.buildInputForm.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            object:{}
        };

        this.list = [];

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


    buildInputForm(){
        console.log("Building Input Form for "+JSON.stringify(this.props.schema));

        let inputFields = [];
        let props = this.props.schema.properties;

        //@Todo this needs to support all JSON Schema type fields

        for(let field in props){
            console.debug(JSON.stringify(props[field]));

            let obj = props[field];

            if(obj.type.localeCompare("string")==0) {
                inputFields.push(<div key={field}>
                    <label htmlFor={"input" + field}>{field}</label>
                    <input type="text" value={this.state[field]} onChange={this.handleChange} className="form-control" placeholder={"input " + field} id={field} data-field={field}/>
                </div>);
            }
            else if(obj.type.localeCompare("object")==0){

            }
            else if(obj.type.localeCompare("array")==0) {
                inputFields.push(<div key={field}><label htmlFor={"input"+field}>{field}</label>
                    <div className="form-inline">
                        <div className="form-group">
                            <Select value={this.state.object[field]} multi={true} handleSelect={this.handleSelect} field={field} list={this.props.allSchemas}/>
                        </div>
                    </div>
                </div>);
            }
        }

        return inputFields;
    }

    //@ToDo handle database submission...
    handleSubmit(event){
        let db = new PouchDB(OBJECT_DB);

        this.state.object.title = this.props.schema.title;

        console.log("Writing new Object: "+JSON.stringify(this.state.object));

        db.post(this.state.object, function(err, res){
            if(err)
                console.error(err);
            else{
                $("#"+this.props.dialogId).dialog("close");

                let obj = {};
                this.setState({
                    object:obj
                });

                //Callback
                this.props.next();
            }
        }.bind(this));

    }

    handleChange(event){
        const field = [$("#"+event.target.id).data("field")];

        this.state.object[field]= event.target.value;
    }

    handleSelect(event){
        const field = [$("#"+event.target.id).data("field")];

        const options = event.target.selectedOptions;

        let list = [];
        for(let x of options){
            const id = x.attributes["data-id"].value;

            console.debug("Addding Object "+id +" to new definition");

            list.push(id);
        }

        let obj = this.state.object;
        obj[field] = list;
        console.log("Setting new Object State: "+JSON.stringify(obj));
        this.setState({
            object: obj
        });
    }
}