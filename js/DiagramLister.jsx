//this class will iterate through all the diagrams in the database...
class DiagramLister extends React.Component{

    constructor(props){
        super(props);

        this.state = {list:""};
    }

    componentDidMount(){
        diagramDB.query("diagrams/by_name", function(err, res){
            var list = res.rows.map(function(key){
                return <li>{key.key}</li>
            });

            this.setState({list:list});
        }.bind(this));
    }

    render() {
        return <div>
            <button type="button" className="btn btn-default" data-toggle="modal" data-target="#AppModal">Create Application</button>
            <ul>{this.state.list}</ul>
        </div>
    }


}