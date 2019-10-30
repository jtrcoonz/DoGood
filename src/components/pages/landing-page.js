import React from "react";
import { Link } from "react-router-dom";
import "../pages-styling/landing-page.css";
import Result from "./result";
import AppContext from "../app-context";

export default class LandingPage extends React.Component {
  static contextType = AppContext;
  
  state = {
    category: ''
  }

  handleSelection = (e) => {
    const category = e.target.value;
    this.setState({
      category,
    })
  }

  render() {
    
    const filteredListings = this.context.listings.reduce((acc, listing) => {
      const category = this.state.category;
      if (!category) {
        acc.push(<Result listing={listing} key={listing.id} />)
      }
      else if (category && listing.category === category) {
        acc.push(<Result listing={listing} key={listing.id} />)
      }
      return acc;
    }, []);

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
          <select onChange={this.handleSelection} id="search-bar">
            <option value="">-Please select a category-</option>
            <option value="Animals">Animals</option>
            <option value="Arts, Culture, Humanities">Arts, Culture, Humanities</option>
            <option value="Community Development">Community Development</option>
            <option value="Education">Education</option>
            <option value="Environment">Environment</option>
            <option value="Health">Health</option>
            <option value="Human and Civil Rights">Human and Civil Rights</option>
            <option value="Human and Social Services">Human and Social Services</option>
            <option value="International">International</option>
            <option value="Research and Public Policy">Research and Public Policy</option>
            <option value="Religion">Religion</option>
          </select>
          <section id="search-results">
            {filteredListings}
          </section>
        </main>
      </div>
    );
  }
}
