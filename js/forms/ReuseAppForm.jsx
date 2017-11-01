class ReuseApplicationForm extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){

    }
    render(){
        return <form action="#">
            <input type={"text"}/>
        </form>
    }
}