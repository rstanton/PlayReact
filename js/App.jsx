var diagramDB;
var appDB;
class App extends React.Component{
    constructor(props){
        super(props);

        diagramDB = new PouchDB("diagrams");
        appDB = new PouchDB("applications");

        //intialise database
        createIndex(diagramDB, diagramDDoc);
        createIndex(appDB, applicationDDoc);
    }


    /**
     * Adds the navigation, adds a hidden modal for new applications, shows the tabbed screen
     * @returns {XML}
     */
    render(){
        return <div>
            <NewApplicationDialog id={"AppModal"} body={"New Application"} modal={true}/>
            <NewDiagramDialog id="diagramdialog" body="New Diagram" modal={true}/>
            <div className="container">
                <TabSheet/>
            </div>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


