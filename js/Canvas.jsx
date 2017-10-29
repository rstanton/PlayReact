
class Canvas extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            diagramName:"Ross' Diagram"
        };
    }

    render(){
        return <div id="canvas" className="container-fluid hidden">
        </div>
    }
}
