/**
 *
 */
class DynamicDialog extends Dialog{
    constructor(props){
        super(props);

    }

    render(){
        return <div id={this.props.id} title={this.props.title}>
            <div>
                <DynamicObjectForm dialogId={this.props.id} next={this.props.next} allSchemas={this.props.allSchemas} schema={this.props.schema}/>
            </div>
        </div>;
    }

}