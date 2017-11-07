class DynamicObjectForm extends React.Component{
    constructor(props){
        super(props);
        
        this.buildInputForm = this.buildInputForm.bind(this);

        this.state = {
            inputFields:[]
        }
    }

    render() {
        let form = this.buildInputForm();

        return form;
    }


    buildInputForm(){
        console.log("Building Input Form for "+JSON.stringify(this.props.schema));

        let inputFields = [];
        let props = this.props.schema.properties;

        //inputFields.push(<p key={"label"}>Create a new {this.props.schema.title}</p>)

        //@Todo this needs to support all JSON Schema type fields
        for(let x in props){
            inputFields.push(<div key={x}>
                <label htmlFor={"input" + x}>{x}</label>
                <input type="text" onChange={this.props.onChange} className="form-control" placeholder={"input " + x} id={"input" + x} data-title={x}/></div>);
        }

        return inputFields;
    }
}