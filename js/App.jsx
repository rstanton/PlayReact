

function App(){
    return(
        <div>
            <Nav/>
            <Alert status="success" message=" All Ok "/>
            <Jumbo name="Ross" label="Click" message="Test"/>
            <InputGroup placeholder="User's account name" domain="kingfisher.com"/>
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);