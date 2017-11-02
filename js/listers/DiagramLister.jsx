//this class will iterate through all the diagrams in the database...
class DiagramLister extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            list:[]
        };

        this.getDiagrams = this.getDiagrams.bind(this);
        this.showDialog = this.showDialog.bind(this);
    }

    componentDidMount(){
        this.getDiagrams();
    }

    render() {
        return <div>
            <table className="table table-striped">
                <thead>
                <tr><th>#</th><th>Name</th><th>Author</th><th>
                    <span onClick={() => this.getDiagrams()} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    <span onClick={() => this.showDialog()} className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </th></tr>
                </thead>
                <tbody>
                    {this.state.list}
                </tbody>
            </table>
        </div>
    }

    showDialog(){
        $("#diagramdialog").dialog("open");
    }

    getDiagrams(){
        $("#diagramdialog").dialog("close");
        //Clear the current state
        this.setState({
            list:[]
        });

        //Get all documents in the database index
        diagramDB.query("diagrams/by_name", function(err, res){
            $("#AppModal").dialog("close");

            if(err)
                console.error(err);

            //get a list of all the ids
            var list = [];
            list = res.rows.map(function(key){
                return key.id;
            });

            for(let n=0;n<list.length; n++) {
                diagramDB.get(list[n], function (err, doc) {
                    if (err)
                        console.error(err);

                    //get the current array and add a new entry on the end
                    let arr = this.state.list;
                    arr.push(<tr key={doc._id}><td>{doc._id}</td><td>{doc.diagramName}</td><td>{doc.author}</td><td>
                        <a href="#" title="Delete Diagram"><span onClick={() => this.delete(doc._id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                        <a href={"canvas.html?"+doc._id} target="_blank" title="Edit Diagram"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                    </td></tr>);

                    //save to the state
                    this.setState({list: arr});

                }.bind(this));
            }
        }.bind(this));
    }

    /**
     * Removes the application from the database that is associated with the specified application ID then refreshes the view state based on the updated DB contents
     * @param id
     */
    delete(id){
        console.log("Delete Request for "+id);

        diagramDB.get(id, function(err, doc){
            diagramDB.remove(doc, function(err, response){
                if(err)
                    console.error(err);

                this.getDiagrams();

            }.bind(this));
        }.bind(this));
    }

}