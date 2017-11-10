class Select extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.buildList = this.buildList.bind(this);
    }

    componentDidMount(){

    }

    render(){
        if(this.props.multi) {
            return <select id={"select" + this.props.field} selectedvalue={this.props.value} data-field={this.props.field} onChange={this.props.handleSelect} className="list-group" multiple>
                {this.buildList()}
            </select>;
        }
        else{
            return <select id={"select" + this.props.field} value={this.props.value} data-field={this.props.field} onChange={this.props.handleSelect} className="list-group">
                {this.buildList()}
            </select>;
        }

    }

    buildList(){
        console.debug("Building MultiSelect List: "+JSON.stringify(this.props.list));

        let list = this.props.list.map(function(schema) {
            console.log(JSON.stringify(schema));

            //return <button key={schema.title} type="button" className="list-group-item" data-schema={schema} onClick={this.props.onValueSelect}>{schema.title}</button>
            return <option className="list-group-item" key={schema.title} value={schema.title} data-id={schema.id} data-field={this.props.field} data-schema={schema}>{schema.title}</option>;
        }.bind(this));

        return list;

    }
}