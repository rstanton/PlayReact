/**
 *
 */
class DynamicDialog extends Dialog{
    constructor(props){
        super(props);

        this.onSchemaChange = this.onSchemaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            form:[],
            schema:{}
        };

    }

    render(){
        console.log("Rendering "+JSON.stringify(this.state.schema));

        return <div id={this.props.id} title={this.props.title}>
            <div>
                <GenericObjectLister id={"SchemaLister"} onChange={this.onSchemaChange}/>
                <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <DynamicObjectForm onChange={this.handleChange} schema={this.state.schema}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
                <pre>{JSON.stringify(this.state.schema)}</pre>
            </div>
        </div>;
    }

    onSchemaChange(event){
        let schema = JSON.parse(event.target.options[event.target.selectedIndex].dataset.schema);
        console.log("Changing object type to "+schema.title);

        this.setState({
            schema:schema
        });

    }

    handleChange(event){
        console.log("Change in "+event.target.id);
        console.log([$("#"+event.target.id).data("title")]); //:event.target.value
    }

    //@ToDo handle database submission...
    handleSubmit(event){
        let db = new PouchDB(OBJECT_DB);
    }
}