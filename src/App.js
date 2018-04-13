import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class Portals extends Component {
    render() {
        return createPortal(<Message />, document.getElementById("touchme"));
    }
}

const Message = () => "Just touched it!";

/// Imposible return list of element in component without fragment.
class ReturnTypes extends Component {
    render() {
        return (
            <Fragment>
                <ReturnString />
                <Portals />
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
