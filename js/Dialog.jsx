class Dialog extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        $("#"+this.props.id).dialog({
            autoOpen: false,
            closeOnEscape: true,
            title:this.props.title,
            width:500,
            height:500,
            resizable:false
        });
    }
}