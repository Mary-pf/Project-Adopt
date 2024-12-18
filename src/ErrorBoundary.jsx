import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDriverdStateFormError() {
        return { hasError: true }
    }
    componentDidCatch(error, info){
        //typically you would log this to something like TrackJS or NewLic
        console.log("ErrorBoundart component caught an error", error, info);        
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    There was an error with this listing. <Link to="/" >Click here to</Link> {" "}
                    go back to the home page.
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

