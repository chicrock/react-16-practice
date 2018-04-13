import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

class ErrorMaker extends Component {
    state = {
        friends: ["jisu", "flynn", "dall", "kneeprayer"],
    };

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                friends: undefined,
            });
        }, 2000);
    };
    render() {
        const { friends } = this.state;
        return friends.map((friend) => ` ${friend} `);
    }
}

class Portals extends Component {
    render() {
        return createPortal(<Message />, document.getElementById("touchme"));
    }
}

const Message = () => "Just touched it!";

const ErrorFallback = () => " Sorry something went wrong";

/// Imposible return list of element in component without fragment.
class ReturnTypes extends Component {
    state = {
        hasError: false,
    };
    componentDidCatch = (error, info) => {
        console.log(
            `catched ${error} the info i have is ${JSON.stringify(info)}`
        );
        this.setState({
            hasError: true,
        });
    };
    render() {
        const { hasError } = this.state;
        return (
            <Fragment>
                <ReturnString />
                <Portals />
                {hasError ? <ErrorFallback /> : <ErrorMaker />}
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
