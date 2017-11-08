/**
 *
 */
class DynamicDialog extends Dialog{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.object = {}

    }

    render(){
        return <div id={this.props.id} title={this.props.title}>
            <div>
                <form action="#" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <DynamicObjectForm onChange={this.handleChange} schema={this.props.schema}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>;
    }

    handleChange(event){
        const field = [$("#"+event.target.id).data("title")];
        this.object[field]= event.target.value;
    }


    //@ToDo handle database submission...
    handleSubmit(event){
        let db = new PouchDB(OBJECT_DB);

        this.object.title = this.props.schema.title;

        console.log(JSON.stringify(this.object));

        db.post(this.object, function(err, res){
            if(err)
                console.error(err);
            else{
                $("#"+this.props.id).dialog("close");

                //Callback
                this.props.next();
            }
        }.bind(this));

        this.object = {};
    }
}