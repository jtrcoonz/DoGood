import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config";

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
  render() {
    return (
      <div className="dashboard-container">
        <nav className="nav-bar">
          <h1 className="site-logo">DG</h1>
        </nav>
        <header role="banner">
          <h2 className="page-title">Your Listings</h2>
        </header>
        <main role="main" id="dash-main">
          <Link to="/create" className="button-style">
            New Listing
          </Link>
          <section id="search-results">
            <div className="result">
              <span className="org-name">Org 1</span>
              <span className="position-title">Title</span>
              <span className="post-date">Date</span>
            </div>
            <div className="result">
              <span className="org-name">Org 2</span>
              <span className="position-title">Title</span>
              <span className="post-date">Date</span>
            </div>
            <div className="result">
              <span className="org-name">Org 3</span>
              <span className="position-title">Title</span>
              <span className="post-date">Date</span>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
