class DynamicObjectForm extends React.Component{
    constructor(props){
        super(props);
        
        this.buildInputForm = this.buildInputForm.bind(this);

        this.state = {
        };
    }

    render() {
        let form = this.buildInputForm();

        return form;
    }


    buildInputForm(){
        console.log("Building Input Form for "+JSON.stringify(this.props.schema));

        let inputFields = [];
        let props = this.props.schema.properties;

        //@Todo this needs to support all JSON Schema type fields
        for(let field in props){
            inputFields.push(<div key={field}>
                <label htmlFor={"input" + field}>{field}</label>
                <input type="text" onChange={this.props.onChange} className="form-control" placeholder={"input " + field} id={field} data-title={field}/></div>);
        }

        return inputFields;
    }
}