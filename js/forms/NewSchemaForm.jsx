class NewSchemaForm extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            schema:""
        }
    }

    render(){
        let form = <form action="#" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor={"schema"}>Schema:</label>
                <textarea className={"form-control"} rows={"10"} id={"schema"} value={this.state.schema} onChange={this.handleChange} placeholder={"Enter JSON Schema"}></textarea>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
        </form>;

        return form;
    }

    handleChange(change){
        this.setState({
            schema: change.target.value
        });
    }

    handleSubmit(event){
        //let db = new PouchDB("schema");

        let obj = JSON.parse(this.state.schema);

        let db = new PouchDB("schemas");
        db.post(obj, function(err,doc){
            if(err)
                console.error(err)
            
        }.bind(this));

        this.setState({
            schema:""
        });

        event.preventDefault();
    }
}