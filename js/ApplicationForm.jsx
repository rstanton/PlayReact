class ApplicationForm extends React.Component{
    render(){
        return <div className="modal fade" tabIndex="-1" id={this.props.id} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">{this.props.title}</h4>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleOther">Name</label>
                                <input type="text" className="form-control" id="exampleOther" placeholder="Name"/>
                            </div>
                        </form>
                   </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    }
}