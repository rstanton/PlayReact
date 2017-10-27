"use strict";

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(Nav, null),
        React.createElement(Alert, { status: "success", message: " All Ok " }),
        React.createElement(Jumbo, { name: "Ross", label: "Click", message: "Test" }),
        React.createElement(InputGroup, { placeholder: "User's account name", domain: "kingfisher.com" })
    );
}
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=App.js.map