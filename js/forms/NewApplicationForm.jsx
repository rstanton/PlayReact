/**
 * The clever bit:
 * @ToDo Calling classes need to pass a function that is the next thing to be done...
 */
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
        return  <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="appName">Application Name</label>
                        <input type="text" className="form-control" id="appName" value={this.state.appName} placeholder="Application Name" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="appVendor">Vendor</label>
                        <input type="text" className="form-control" id="appVendor" value={this.state.appVendor} placeholder="Vendor Name" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save changes</button>
            </form>
    }

    handleChange(event) {
        var state = { [event.target.id]: event.target.value};

        this.setState(state);
    }


    handleSubmit(event){
        let app = {
            "appName": this.state.appName,
            "appVendor": this.state.appVendor
        };

        console.log("Saving "+JSON.stringify(app));

        appDB.post(app, function(err, doc){
            if(err)
                console.log(err);
            else {
                console.log(JSON.stringify(doc));

                app.id = doc.id;
                app.rev = doc.rev;

                //Next is the function passed in from the calling application! Love JS!
                //@ToDo Need to pass back the ID as well
            }

            this.props.next(app);

        }.bind(this));

        this.setState({
            appVendor:"",
            appName: ""
        });

        event.preventDefault();

        //@ToDo need to close PouchDB connection
    }
}