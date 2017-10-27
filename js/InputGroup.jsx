class InputGroup extends React.Component {
    render() {
        return <div className="input-group">
            <input type="text" className="form-control" placeholder={this.props.placeholder}
                   aria-describedby="basic-addon2"/>
            <span className="input-group-addon" id="basic-addon2" onClick={ function(){ console.log("Hello"); return <ApplicationForm/>}}>@{this.props.domain}</span>
        </div>
    }
}