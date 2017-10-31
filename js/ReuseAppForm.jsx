class ReuseApplicationForm extends React.Component{
    super(props){

    }

    render(){
        return  <form action="#" onSubmit={this.handleSubmit}>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="submit" className="btn btn-primary">Save changes</button>
        </form>
    }

    handleSubmit(event){
        let appDB = new PouchDB("applications");
        const app = {
            "appName": this.state.appName,
            "appVendor": this.state.appVendor
        };



        this.setState({
            appVendor:"",
            appName: ""
        });

        event.preventDefault();

        //Next is the function passed in from the calling application! Love JS!
        //@ToDo Need to pass back the ID as well
        this.props.next(app);

        //@ToDo need to close PouchDB connection
    }
}