/**
 * Props will contain the ID of the schema object that describes the resource to be displayed
 * - Get the schema
 * - Open a connection to the relevant database
 * - Query for all objects
 * - Display a table containing the relevant properties
 */
class GenericLister extends React.Component{
    constructor(props){
        super(props);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getSchema = this.getSchema.bind(this);
        this.getData = this.getData.bind(this);

        this.state = {
            head:[],
            body:[]
        };

        this.schema = {

        };
    }

    componentDidMount(){
        //Reads the table header
        this.getSchema(this.getData);
    }

    getData(){
        let db = new PouchDB(this.schema.title);

        db.query(this.schema.title+"/by_name", function(err,res){
            if(err){
                console.error(err);
            }
            else{
                let td = [];

            }
        }.bind(this));
    }


    getSchema(next){
        let db = new PouchDB("schemas");
        let schema = {};
        db.get(this.props.id, function(err, doc){
            if(err){
                console.error(err);
            }
            else{
                this.schema = doc;

                let props = doc.properties;

                let th=[];
                for(let x in props){
                    th.push(<th key={x}>{x}</th>);
                }

                this.setState({
                    head:th
                });
            }
            //now populate the table
            next();
        }.bind(this));

    }

    render(){
        return <div>
            <table className="table table-striped">
                <thead>
                    <tr>{this.state.head}</tr>
                </thead>
                <tbody>
                {this.state.body}
                </tbody>
            </table>
        </div>
    }
}