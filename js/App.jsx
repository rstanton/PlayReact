var diagramDB;
var appDB;

var ddoc = {
    _id:'_design/diagrams',
    views:{
        by_name:{
            map:function(doc) {
                emit(doc.name);
            }.toString()
        }
    }
};

class App extends React.Component{
    constructor(props){
        super(props);

        diagramDB = new PouchDB("diagrams");
        appDB = new PouchDB("apps");

        diagramDB.put(ddoc, function(err, doc){
            if(err){
                if(err.status!=409)
                    console.error(err);
            }

        });

        diagramDB.post({name: "ross"}, function(err, doc){
            if(err)
                console.error(err);

            console.log("OK");
        });
    }


    
    render(){
        return <div className="container">
            <Nav/>
            <Alert status="success" message=" All Ok " timeout="5000"/>
            <ApplicationForm id="AppModal" title="Something Urgent!" body="Body Message. Better Fix whatever's up!"/>
            <TabSheet/>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


