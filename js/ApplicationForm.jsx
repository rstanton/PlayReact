class ApplicationForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            appName:"",
            appVendor:"",
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
                                <label htmlFor="appName">Application Name</label>
                                <input type="text" className="form-control" id="appName" value={this.state.appValue} placeholder="Application Name" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="appVendor">Vendor</label>
                                <input type="text" className="form-control" id="appVendor" value={this.state.vendorValue} placeholder="Vendor Name" onChange={this.handleChange}/>
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
            "appName": this.state.appName,
            "appVendor": this.state.appVendor
        };

        console.log("Saving "+JSON.stringify(app));
        appDB.post(app, function(err, doc){
            if(err)
                console.log(err);

            console.log(doc);
        });

        event.preventDefault();
    }
}