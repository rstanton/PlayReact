var view;
var appDB;

class Canvas extends React.Component{

    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this)

        appDB = new PouchDB("applications");
    }

    componentDidMount(){
        let width = 2000;
        let height = 2000;

        view = new View(this.props.id, width, height);
        view.setScrollArea("#"+this.props.id);
    }


    render(){
        let style={
            width:"2000px",
            height:"2000px"
        };

        return <div>
            <IntDialog next={this.next.bind(this)} modal="true" id="interfaceDialog" title="Interfaces" body="Interfaces Here"/>
            <NewApplicationDialog reuse={true} next={this.next.bind(this)} modal="true" id="applicationDialog" title="Applications" body="Applications Here"/>
            <div id={this.props.id + "_container"}>
                <div style={style} id={this.props.id} /></div>
            </div>
    }

    next(obj){
        $("#applicationDialog").dialog("close");
        console.log(JSON.stringify(obj));
        let rect = new draw2d.shape.basic.Rectangle();
        let label = new draw2d.shape.basic.Label({text:obj.id+" "+obj.appName});
        rect.add(label, new draw2d.layout.locator.BottomLocator());

        view.add(rect);
    }
}

ReactDOM.render(
    <div>
        <Canvas id="canvas"/>
    </div>,
    document.getElementById('root')
);
