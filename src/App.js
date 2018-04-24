import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

const Message = () => "Just touched it!";

const ErrorFallback = () => " Sorry something went wrong";

const BoundaryHOC = ProtectedComponent =>
  class BoundaryHOC extends Component {
    state = {
      hasError: false,
    };
    componentDidCatch = () => {
      this.setState({
        hasError: true,
      });
    };
    render() {
      const { hasError } = this.state;

      if (hasError) {
        return <ErrorFallback />;
      } else {
        return <ProtectedComponent />;
      }
    }
  };

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
    return friends.map(friend => ` ${friend} `);
  }
}

const PErrorMaker = BoundaryHOC(ErrorMaker);

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const PPortals = BoundaryHOC(Portals);

/// Imposible return list of element in component without fragment.
class ReturnTypes extends Component {
  render() {
    return (
      <Fragment>
        <ReturnString />
        <PPortals />
        <PErrorMaker />
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

export default BoundaryHOC(App);
