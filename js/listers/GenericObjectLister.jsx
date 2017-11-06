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
        return <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Object
                <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                {this.state.list}
            </ul>
        </div>
    }

    getData(){
        let db = new PouchDB(SCHEMA_DB);

        db.query(SCHEMA_VIEW, function(err, res){
            if(err)
                console.error(err);
            else {
                console.debug("Generic Object Lister got "+JSON.stringify(res));
                let list = [];
                res.rows.map(function (row) {
                    console.debug("Building Object Lister for " + JSON.stringify(row.key));

                    list.push(<li key={row.key.title}><a href="#">{row.key.title}</a></li>);
                });

                this.setState({
                    list:list
                });
            }
        }.bind(this));
    }


}