class ApplicationLister extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.delete = this.delete.bind(this);
        this.getApplications = this.getApplications.bind(this);

        this.state = {
            list:[]
        }

    }


    render(){
        return <div>
            <ApplicationForm next={this.getApplications.bind(this)} id="AppModal" title="Create A New Application" body=""/>
            <table className="table table-striped">
                <thead>
                    <tr><th>#</th><th>Name</th><th>Vendor</th><th>
                        <span onClick={() => this.getApplications()} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>
                        <span data-toggle="modal" data-target="#AppModal" className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                    </th></tr>
                </thead>
                <tbody>
                    {this.state.list}
                </tbody>
            </table>
        </div>
    }


    componentDidMount(){
        this.getApplications();
    }

    getApplications(){
        //Clear the current state
        this.setState({
            list:[]
        });

        //Get all documents in the database index
        appDB.query("applications/by_name", function(err, res){
            if(err)
                console.error(err);

            //get a list of all the ids
            var list = [];
            list = res.rows.map(function(key){
                return key.id;
            });

            for(let n=0;n<list.length; n++) {
                appDB.get(list[n], function (err, doc) {
                    if (err)
                        console.error(err);

                    //get the current array and add a new entry on the end
                    var arr = this.state.list;
                    arr.push(<tr key={doc._id}><td>{doc._id}</td><td>{doc.appName}</td><td>{doc.appVendor}</td><td><span onClick={() => this.delete(doc._id)} className="glyphicon glyphicon-trash" aria-hidden="true"></span></td></tr>);

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

        appDB.get(id, function(err, doc){
            appDB.remove(doc, function(err, response){
                if(err)
                    console.error(err);

                this.getApplications();

            }.bind(this));
        }.bind(this));
    }
}