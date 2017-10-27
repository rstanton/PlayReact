class Jumbo extends React.Component {
    render() {
        return <div className="jumbotron">
            <h1>Hello, {this.props.name}!</h1>
            <p>{this.props.message}</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.label}</a></p>
        </div>
    }
}