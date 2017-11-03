class SchemaLister extends React.Component{
    constructor(props){
        super(props)

        this.getSchemas = this.getSchemas.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);


        this.state = {
            schemas:[]
        }
    }

    componentDidMount(){
        this.getSchemas();
    }
    
    getSchemas(){
        let db = new PouchDB("schemas");
        this.setState({
            schemas:[]
        });

        db.query("schemas/by_name", function(err, res) {
            if(err)
                console.error(err);
            else {
                let list = []
                list = res.rows.map(function (obj) {
                    return obj.id;
                });

                for(var x of list){
                    db.get(x, function(err, doc){
                        if(err)
                            console.error(err);
                        else{
                            let arr = this.state.schemas;
                            arr.push(<tr key={doc._id}><td>{doc._id}</td><td>{doc.title}</td><td><textarea readOnly rows="10" cols="80" defaultValue={JSON.stringify(doc, undefined, 2)}></textarea></td><td></td></tr>);

                            this.setState({
                                schemas: arr
                            });
                        }
                    }.bind(this));
                }
                db.close();
            }
        }.bind(this));


    }

    render(){
        let view = <div>
            <table className="table table-striped">
                <thead>
                <tr><th>#</th><th>Name</th><th>Schema</th><th>
                    <span onClick={() => this.getSchemas()} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    <span onClick={() => this.showDialog()} className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </th></tr>
                </thead>
                <tbody>
                {this.state.schemas}
                </tbody>
            </table>
        </div>

        return view;
    }
}