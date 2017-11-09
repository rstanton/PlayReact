class ObjectListBuilder extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        $("#"+this.props.id).selectable({
            selected: function(ev, ui){
                console.log("Selected");
            }
        });
    }

    render(){
        console.log("Runing Builder");
        let style = {
            width:"100%"
        };

        return <div style={style}><ul className="list-group" multiple id={this.props.id}>
            <option className="list-group-item" value={"one"} key={"one"}>One</option>
            <option className="list-group-item" value={"two"} key={"two"}>trow</option>
        </ul></div>;

    }
}
