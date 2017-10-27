class Alert extends React.Component{
    render(){
        return <div className={"alert alert-"+this.props.status} role="alert">{this.props.message}</div>
    }
}
