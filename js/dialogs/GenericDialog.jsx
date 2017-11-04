/**
 * @ToDo This needs to conditionally show the 're-use' tab as it's not valid for a new application scenario
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

        inputFields.push(<p key={"label"}>Create a new {this.props.schema.title}</p>)

        for(let x in props){
            inputFields.push(<div key={x}><label htmlFor={"input"+x}>{x}</label><input type="text" onChange={this.handleChange} className="form-control" placeholder={"input "+x} id={"input"+x} data-title={x}/></div>);
        }

        let dialog = <div id={this.props.id}>
            <p>{this.props.body}</p>
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#new" aria-controls="home" role="tab" data-toggle="tab">New</a></li>
                    {reuse!=null &&
                    <li role="presentation"><a href="#reuse" aria-controls="profile" role="tab" data-toggle="tab">Existing</a></li>
                    }
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="new">
                        <form action="#" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                {inputFields}
                            </div>
                            <button type="submit" className="btn btn-primary">Save</button>
                        </form>
                        <pre>{JSON.stringify(this.props.schema)}</pre>
                    </div>
                    {reuse}
                </div>
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
     */
    handleSubmit(event){
        event.preventDefault();

        let db = new PouchDB(this.props.schema.title);

        db.post(this.state, function(err,doc){
            if(err){
                console.error(err);
            }
            else {
                $("#dialog" + this.props.schema._id).dialog("close");
            }
        }.bind(this));


    }
}