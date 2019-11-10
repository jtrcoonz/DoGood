import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import Result from "./result";
import '../pages-styling/dashboard.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    };
  }
  componentDidMount() {
    fetch(`${API_BASE_URL}/listings/dashboard`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
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
  signOut = (event) => {
    this.event.preventDefault();
    localStorage.setItem('token', '');
  }
  render() {
    return (
      <div className="dashboard-container">
        <nav className="nav-bar">
          <h1 className="site-logo" onClick={() => { window.location.href = "/"; }}>DG</h1>
          <Link to="/" onClick={this.signOut}>
            Sign out
          </Link>
        </nav>
        <header role="banner">
          <h2 className="page-title">Your Listings</h2>
        </header>
        <main role="main" id="dash-main">
          <Link to="/create" className="button-style" id="new-listing-button">
            New Listing
          </Link>
          <section id="search-results">
            {this.state.listings.map((listing, index) => (
              <Result listing={listing} key={index} deleteButton={'x'}/>
            ))}
          </section>
        </main>
      </div>
    );
  }
}
