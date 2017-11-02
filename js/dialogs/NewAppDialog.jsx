/**
 * @ToDo This needs to conditionally show the 're-use' tab as it's not valid for a new application scenario
 */
class NewApplicationDialog extends Dialog{
    constructor(props) {
        super(props);
    }


    //@Todo this is kind of hacky and needs re-writing.
    render() {
        let reuse = null;
        if(this.props.reuse){
            reuse = <div role="tabpanel" className="tab-pane" id="reuse">
                <ReuseApplicationForm next={this.next.bind(this)}/>
            </div>
        }

        return <div id={this.props.id}>
            <p>{this.props.body}</p>
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#new" aria-controls="home" role="tab" data-toggle="tab">New</a></li>
                    {reuse!=null &&
                        <li role="presentation"><a href="#reuse" aria-controls="profile" role="tab" data-toggle="tab">Existing</a></li>
                    }
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="new">
                        <ApplicationForm next={this.next.bind(this)}/>
                    </div>
                    {reuse}
                </div>
            </div>
        </div>
    }

    //@ToDo this is the most hacky part!
    next(obj){
        $("#"+this.props.id).dialog("close");

        if(this.props.next!=null)
            this.props.next(obj);
    }
}