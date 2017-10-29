//this class will iterate through all the diagrams in the database...
class DiagramLister extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            list:[]
        };

        this.getDiagrams = this.getDiagrams.bind(this);
        this.displayDiagram = this.displayDiagram.bind(this);
    }

    componentDidMount(){
        this.getDiagrams();
    }

    render() {
        return <div>
            <DiagramForm view={this.getDiagrams.bind(this)} id="DiagramModal" title="Create A New Diagram" body=""/>
            <table className="table table-striped">
                <thead>
                <tr><th>#</th><th>Name</th><th>Author</th><th>
                    <span onClick={() => this.getDiagrams()} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                    <span data-toggle="modal" data-target="#DiagramModal" className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                </th></tr>
                </thead>
                <tbody>
                    {this.state.list}
                </tbody>
            </table>
        </div>
    }

    getDiagrams(){

        //Clear the current state
        this.setState({
            list:[]
        });

        //Get all documents in the database index
        diagramDB.query("diagrams/by_name", function(err, res){
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
                    var arr = this.state.list;
                    arr.push(<tr key={doc._id}><td>{doc._id}</td><td>{doc.diagramName}</td><td>{doc.appVendor}</td><td>
                        <a href="#" title="Delete Diagram"><span onClick={() => this.delete(doc._id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span></a>
                        <a href="#" title="Edit Diagram"><span onClick={() => this.displayDiagram(doc._id)} className="glyphicon glyphicon-pencil" aria-hidden="true"></span></a>
                    </td></tr>);

                    //save to the state
                    this.setState({list: arr});

                }.bind(this));
            }
        }.bind(this));
    }

    displayDiagram(id){
        $("#tabs").addClass("hidden");
        $("#canvas").removeClass("hidden");
        $("#canvas").addClass("show");
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