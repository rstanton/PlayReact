class Alert extends React.Component{
    render(){
        return <div id="alert" className={"alert alert-"+this.props.status} role="alert">{this.props.message}</div>
    }
}
