var view;
class Canvas extends React.Component{

    constructor(props){
        super(props);

        //this.componentDidMount = this.componentDidMount().bind(this)
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
            <IntDialog id="interfaceDialog" title="Interfaces" body="Interfaces Here"/>
            <AppDialog id="applicationDialog" title="Applications" body="Applications Here"/>
            <div id={this.props.id + "_container"}>
            <div style={style} id={this.props.id} />
            </div></div>
    }
}

ReactDOM.render(
    <div>
        <Canvas id="canvas"/>
     </div>,
    document.getElementById('root')
);
