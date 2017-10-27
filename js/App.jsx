

function App(){
    return(
        <div>
            <Nav/>
            <Alert status="success" message=" All Ok "/>
            <Jumbo name="Ross" label="Click" message="Test"/>
            <ApplicationForm id="AppModal" title="Something Urgent!" body="Body Message. Better Fix whatever's up!"/>
            <InputGroup placeholder="User's account name" domain="kingfisher.com"/>
        </div>
    );
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);