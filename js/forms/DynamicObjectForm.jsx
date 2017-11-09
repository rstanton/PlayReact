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
            console.debug(JSON.stringify(props[field]));

            let obj = props[field];
            if(obj.type.localeCompare("string")==0) {
                inputFields.push(<div key={field}><label htmlFor={"input" + field}>{field}</label>
                    <input type="text" onChange={this.props.onChange} className="form-control"
                           placeholder={"input " + field} id={field} data-title={field}/></div>);
            }
            else if(obj.type.localeCompare("object")==0){

            }
            else if(obj.type.localeCompare("array")==0) {
                console.log("Buiding Array");
                inputFields.push(<div key={field}><label htmlFor={"input"+field}>{field}</label><ObjectListBuilder id={"input"+field} schema={this.props.schema}/></div>);
            }
        }

        return inputFields;
    }
}