var diagramDB;
var appDB;


class App extends React.Component{
    constructor(props){
        super(props);

        diagramDB = new PouchDB("diagrams");
        appDB = new PouchDB("appplications");

        //intialise database
        createIndex(diagramDB, diagramDDoc);
        createIndex(appDB, applicationDDoc);
    }


    
    render(){
        return <div className="container">
            <Nav/>
            <ApplicationForm id="AppModal" title="Create A New Application" body=""/>
            <TabSheet/>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


