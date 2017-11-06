class SchemaLister extends React.Component{
    constructor(props){
        super(props)

        this.getSchemas = this.getSchemas.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.delete = this.delete.bind(this);

        this.state = {
            schemas:[]
        }
    }

    componentDidMount(){
        this.getSchemas();
    }
    
    getSchemas(){
        let db = new PouchDB(SCHEMA_DB);
        this.setState({
            schemas:[]
        });

        db.query("Schema/by_name", function(err, res) {
            if(err)
                console.error(err);
            else {
                let list = [];

                list = res.rows.map(function (obj) {
                    return obj.id;
                });

                for(var x of list){
                    db.get(x, function(err, doc){
                        if(err)
                            console.error(err);
                        else{
                            let arr = this.state.schemas;
                            //@Todo all delete option
                            arr.push(<tr key={doc._id}>
                                <td>{doc._id}</td>
                                <td>{doc.title}</td>
                                <td>
                                    <textarea readOnly rows="10" cols="80" defaultValue={JSON.stringify(doc, undefined, 2)}></textarea>
                                </td>
                                <td>
                                    <span onClick={() => this.delete(doc._id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </td></tr>);

                            this.setState({
                                schemas: arr
                            });
                        }
                    }.bind(this));
                }
            }
        }.bind(this));
    }

    //@Todo - the delete function should be generic cross all objects, no need to keep re-writing
    delete(id){
        console.debug("Deleting Schema with ID "+id);

        let db = new PouchDB(SCHEMA_DB);

        db.get(id, function(err, doc){
            db.remove(doc, function(err, resposne){
                if(!err)
                    this.props.next();

            }.bind(this));
        }.bind(this));

    }

    render(){
        let view = <div>
            <table className="table table-striped">
                <thead>
                <tr><th>#</th><th>Name</th><th>Schema</th><th>
                    <span onClick={() => this.getSchemas()} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                </th></tr>
                </thead>
                <tbody>
                {this.state.schemas}
                </tbody>
            </table>
        </div>;

        return view;
    }
}