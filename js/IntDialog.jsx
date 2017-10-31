class IntDialog extends Dialog{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }


    render(){
        return <div id={this.props.id}>
            <p>{this.props.body}</p>
            <div>
                <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">New</a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Existing</a></li>
                </ul>

                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="home">New Int</div>
                    <div role="tabpanel" className="tab-pane" id="profile">...</div>
                </div>
            </div>
        </div>
    }
}