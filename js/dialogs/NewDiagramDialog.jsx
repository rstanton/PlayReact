class NewDiagramDialog extends Dialog{
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
    }

    render(){
        return <div id={this.props.id}>
            <p>{this.props.body}</p>
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#new" aria-controls="home" role="tab" data-toggle="tab">New</a></li>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="new">
                        <NewDiagramForm next={this.next.bind(this)}/>
                    </div>
                </div>
            </div>
        </div>
    }

    next(){
        $("#"+this.props.id).dialog("close");

        if(this.props.next!=null)
            this.props.next();
    }
}