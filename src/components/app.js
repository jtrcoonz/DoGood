import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import AppContext from "./app-context";
import LandingPage from "./pages/landing-page";
import RegistrationPage from "./pages/registration-page";
import CreateListingPage from "./pages/create-listing-page";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login-page";
import API_BASE_URL from "../config";

import { refreshAuthToken } from "../actions/auth";

export class App extends React.Component {
  
  state = {
    listings: []
  }
  
  componentDidMount() {
    fetch(`${API_BASE_URL}/listings`, {
      headers: {
        Accept: "application/json"
      },
      method: "GET"
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        listings: responseJson
      });
    })
    .catch(err => {
      console.log("Whoops! Try this again.");
    });
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    const value = {
      listings: this.state.listings
    }
    return (
      <AppContext.Provider value={value}>
        <div className="app">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={RegistrationPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create" component={CreateListingPage} />
          <Route exact path="/login" component={Login} />
        </div>
      </AppContext.Provider>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App));
