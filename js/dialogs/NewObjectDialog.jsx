/**
 * @ToDo Should split the reuse functionality into another component
 */
class GenericDialog extends Dialog{
    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let reuse = null;
        if(this.props.reuse){
            reuse = <div role="tabpanel" className="tab-pane" id="reuse">
                <p>reuse</p>
            </div>;
        }

        let inputFields = [];
        let props = this.props.schema.properties;

        //inputFields.push(<p key={"label"}>Create a new {this.props.schema.title}</p>)

        //@Todo this needs to support enumerations as well as objects
        for(let x in props){
            if(eval("props."+x+".type").localeCompare("string")==0) {
                inputFields.push(<div key={x}><label htmlFor={"input" + x}>{x}</label><input type="text"
                                                                                             onChange={this.handleChange}
                                                                                             className="form-control"
                                                                                             placeholder={"input " + x}
                                                                                             id={"input" + x}
                                                                                             data-title={x}/></div>);
            }
            else{
                inputFields.push(<div key={x}>
                    <label htmlFor={"input" + x}>{x}</label>
                    <GenericObjectLister id={"input"+x} field={x} onValueChange={this.handleChange}/>
                </div>);
            }
        }

        let dialog = <div id={this.props.id} title={this.props.title}>
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {inputFields}
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
                <pre>{JSON.stringify(this.props.schema)}</pre>
            </div>
        </div>;

        return dialog;
    }

    /**
     * Updates React State, based on the data attribute set on the input box.
     * @param event
     */
    handleChange(event){
        this.setState({
            [$("#"+event.target.id).data("title")]:event.target.value
        });
    }

    /**
     * Saves the object to the database
     * @param event
     * @ToDo validate state against the JSON Schema object and respond accordingly
     */
    handleSubmit(event){
        event.preventDefault();

        console.debug("Saving "+this.props.schema.title+" with "+JSON.stringify(this.state));

        let db = new PouchDB(this.props.schema.title);

        db.post(this.state, function(err,doc){
            if(err){
                console.error(err);
            }
            else {
                $("#dialog" + this.props.schema.title).dialog("close");
            }


            this.setState();

            //If a next action is specified then execute, passing the schema object forward
            if(this.props.next)
                this.props.next(this.props.schema);

        }.bind(this));
    }
}