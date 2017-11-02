/**
 *
 */
class EditorMenu extends React.Component{

    constructor(props){
        super(props);
        
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){

    }

    render(){
        return <div id={this.props.id} class="ui-widget-content">
            <p>Drag me around</p>
        </div>
    }
}