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

        return <div id={this.props.id + "_container"}>
            <div style={style} id={this.props.id} />
        </div>
    }
}

ReactDOM.render(
    <Canvas id="canvas"/>,
    document.getElementById('root')
);
