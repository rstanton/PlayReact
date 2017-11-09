class NavBar extends React.Component{
    constructor(props){
        super(props);

        this.showDialog = this.showDialog.bind(this);
    }

    render(){
        let style={
            zIndex:"500"
        };

        return <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#" onClick={() => this.showDialog()}><img width="15px" src="/bower_components/octicons/lib/svg/database.svg"></img></a>
                </div>
                <p className="navbar-text navbar-right">Signed in as <b>Ross</b></p>
            </div>
        </nav>;
    }

    showDialog(event){
        console.log("Clicked");
    }
}