import React, { Component, Fragment } from "react";

/// Imposible return list of element in component without fragment.
class ReturnTypes extends Component {
    render() {
        return (
            <Fragment>
                <ReturnString />
                <ReturnString />
                <ReturnString />
            </Fragment>
        );
    }
}

class ReturnString extends Component {
    render() {
        return "hello world";
    }
}

class App extends Component {
    render() {
        return <ReturnTypes />;
    }
}

export default App;
