class AllLister extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            objects:[]
        }
    }

    componentDidMount(){

    }

    render(){
    }

    getObjects(){
        let db = new PouchDB(OBJECT_DB);

        db.query(OBJECT_VIEW, function(err,res){
            if(err){
                console.error(err);
            }
            else{
                res.rows.map(function(row){
                    console.debug("Processing Table Row for "+JSON.stringify(row));

                }.bind(this));
            }
        }.bind(this));
    }
}