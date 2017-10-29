class DiagramForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diagramName:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return <div className="modal fade" tabIndex="-1" id={this.props.id} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">{this.props.title}</h4>
                    </div>
                    <form action="#" onSubmit={this.handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="appName">Diagram Name</label>
                                <input type="text" className="form-control" id="diagramName" value={this.state.diagramName} placeholder="Application Name" onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }

    handleChange(event) {
        var state = { [event.target.id]: event.target.value};

        this.setState(state);
    }

    handleSubmit(event){
        const app = {
            "diagramName": this.state.diagramName
        };

        console.log("Saving "+JSON.stringify(app));
        diagramDB.post(app, function(err, doc){
            if(err)
                console.log(err);
        });

        //close the modal
        $("#"+this.props.id).modal('toggle');

        this.setState({
            diagramName:"",
        });

        event.preventDefault();

        this.props.view();
    }
}