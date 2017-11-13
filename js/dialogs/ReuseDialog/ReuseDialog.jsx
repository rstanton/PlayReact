/**
 * Re use dialog
 * props:
 *  id
 *  modal: false
 */
class ReuseDialog extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){

        $("#"+this.props.id).dialog({
            autoOpen: false,
            closeOnEscape: true,
            title:this.props.title,
            modal: this.props.modal,
            width:500,
            height:500,
            resizable:false
        });

        $("#"+this.props.id).dialog("open");

        $("#draggable").draggable({
            helper: 'clone',
            appendTo: 'body',
            zIndex: 150
        });

        $("#"+"container").droppable({
            greedy:true,
            drop:function(event,ui){
                console.log("Dropped");
            },
            activate:function(event, ui){
                console.log("Active");
            }
        });
    }
    render(){
        return <div id={this.props.id} title={this.props.title}>
            <div>
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingOne">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Object Name (Title from Schema?)
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                            <div id="draggable" className="panel-body">
                                This of Objects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}