class NewDiagramForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diagramName:"",
            author:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return <form action="#" onSubmit={this.handleSubmit}>
            <div className="modal-body">
                <div className="form-group">
                    <label htmlFor="appName">Diagram Name</label>
                    <input type="text" className="form-control" id="diagramName" value={this.state.diagramName} placeholder="Application Name" onChange={this.handleChange}/>
                    <label htmlFor="appName">Author</label>
                    <input type="text" className="form-control" id="author" value={this.state.author} placeholder="Application Name" onChange={this.handleChange}/>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
        </form>
    }

    handleChange(event) {
        var state = { [event.target.id]: event.target.value};

        this.setState(state);
    }

    handleSubmit(event){
        diagramDB.post(this.state, function(err, doc){
            if(err)
                console.log(err);
        });

        this.setState({
            diagramName:"",
        });

        event.preventDefault();

        this.props.next();
    }
}