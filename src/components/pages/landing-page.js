import React from "react";
import { Link } from "react-router-dom";
import "../pages-styling/landing-page.css";
import { API_BASE_URL } from "../../config";
import Result from "./result";

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
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
  render() {
    console.log(this.state.listings);
    return (
      <div id="landing-container">
        <nav className="nav-bar">
          <h1 className="site-logo">DG</h1>
          <Link to="/login" className="sign-in-link">
            Sign in
          </Link>
          <Link to="/dashboard" className="dashboard-link">
            Dashboard
          </Link>
        </nav>
        <header role="banner">
          <h2 className="page-title">DoGood</h2>
          <p id="app-description">
            DoGood is your one and only stop to find and list community service
            opportunities.
          </p>
          <Link to="/signup" id="sign-up-link" className="button-style">
            Sign up to post a position
          </Link>
        </header>
        <main role="main">
          <h3 id="search-bar-label">Search</h3>
          <input
            type="text"
            placeholder="IPV, homelessness..."
            id="search-bar"
          />
          <section id="search-results">
            {this.state.listings.map((listing, index) => (
              <Result listing={listing} key={index} />
            ))}
          </section>
        </main>
      </div>
    );
  }
}
