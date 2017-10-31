class AppDialog extends Dialog{
    constructor(props) {
        super(props);
    }

    render(){
        return <div id={this.props.id}>
            <p>{this.props.body}</p>
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#new" aria-controls="home" role="tab" data-toggle="tab">New</a></li>
                    <li role="presentation"><a href="#reuse" aria-controls="profile" role="tab" data-toggle="tab">Existing</a></li>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="new">
                        <ApplicationForm next={this.showApplication.bind(this)}/>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="reuse">
                        <ReuseApplicationForm next={this.showApplication.bind(this)}/>
                    </div>
                </div>
            </div>
        </div>
    }

    showApplication(obj){
        $("#"+this.props.id).dialog("close");

        let rect = new draw2d.shape.basic.Rectangle();
        rect.add(new draw2d.shape.basic.Label({text:obj.appName}), new draw2d.layout.locator.BottomLocator());

        rect.setUserData(obj);
        view.add(rect);
    }
}