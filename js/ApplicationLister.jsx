class ApplicationLister extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <table className="table table-striped">
                <thead>
                    <tr><th>#</th><th>Name</th><th>Vendor</th><th>Action</th></tr>
                </thead>
                <tbody>
                    <tr><td>1</td><td>Test</td><td>Test2</td><td></td></tr>
                    <tr><td>2</td><td>Ping</td><td>Ident</td><td></td></tr>
                </tbody>
            </table>
        </div>
    }
}