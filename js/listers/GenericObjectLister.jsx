/**
 * Should query for all the schemas and offer a drop down list containing the results.
 */
class GenericObjectLister extends React.Component{
    constructor(props) {
        super(props);

        this.getData = this.getData.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            list: []
        }
    }

    componentDidMount(){
        this.getData();
    }

    render(){
        return <select id={this.props.id} onChange={this.props.onChange} className="form-control">
                {this.state.list}
            </select>;
    }

    getData(){
        let db = new PouchDB(SCHEMA_DB);

        db.query(SCHEMA_VIEW, function(err, res){
            if(err)
                console.error(err);
            else {

                let list = [];

                list.push(<option key={"default"} selected>Choose</option>);

                res.rows.map(function (row) {

                    list.push(<option key={row.key.title} data-schema={JSON.stringify(row.key)}>{row.key.title}</option>);
                }.bind(this));

                this.setState({
                    list:list
                });
            }
        }.bind(this));
    }
}