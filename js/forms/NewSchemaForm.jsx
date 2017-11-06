class NewSchemaForm extends React.Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createSchemaView = this.createSchemaView.bind(this);

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
        let obj = JSON.parse(this.state.schema);

        let db = new PouchDB(SCHEMA_DB);
        db.post(obj, function(err,doc){
            if(err)
                console.error(err)

            this.createSchemaView(obj);
        }.bind(this));

        this.setState({
            schema:""
        });

        event.preventDefault();
    }

    /**
     * Creates the actual views
     * @param doc The schema 'by_name' results doc, contains 'key' (title of the schema eg 'Application') and 'id'
     */
    createSchemaView(schema){
        let db = new PouchDB(schema.title);


        var designDoc = {
            _id:'_design/'+schema.title,
            views:{
                by_name:{
                    map:function(doc) {
                        emit(doc);
                    }.toString()
                }
            }
        };

        db.put(designDoc, function(err, resp){
            if(err) {
                if (err.status != 409)
                    console.error(err);

                this.props.next();
            }
            else {
                console.log("Index for " + schema.title + " created.");

                this.props.next();
            }
        }.bind(this));
    }
}