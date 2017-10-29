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


    /**
     * Adds the navigation, adds a hidden modal for new applications, shows the tabbed screen
     * @returns {XML}
     */
    render(){
        return <div>
            <div className="container-fluid">
                <Nav/>
            </div>
            <div className="container">
                <TabSheet/>
            </div>
            <Canvas/>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


