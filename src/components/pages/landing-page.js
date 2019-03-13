import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import '../pages-styling/landing-page.css';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        listings: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/api/listings',
    {
      headers: {
        'Accept': 'application/json',
       // 'Content-Type': 'application/json',
       // 'Authorization': `Bearer ${state.token}`
      },
      method: "GET"
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        listings: responseJson
      })
    })
    .catch(err => {
      console.log("Whoops! Try this again.")
    })
  }
  render() {
    console.log(this.state.listings)
    return (
      <div id="landing-container">
        <nav role="navigation" className="nav-bar">
          <h1 className="site-logo">DG</h1>
          <Link to="#" className="sign-in-link">Sign in</Link>
        </nav>
        <header role="banner">
          <h2 className="page-title">DoGood</h2>
    			<p id="app-description">DoGood is your one and only stop to find and list community service opportunities.</p>
    			<Link to="/signup" id="sign-up-link" className="button-style">Sign up to post a position</Link>
        </header>
        <main role="main">
        	<h3 id="search-bar-label">Search</h3>
        	<input type="text" placeholder="IPV, homelessness..." id="search-bar"></input>
        	<section role="region" id="search-results">
          {this.state.listings.map((listing, index) => (
            <div className="result" key={index}>
              <span className="org-name">{listing.title}</span><span className="position-title">{listing.title}</span><span className="post-date">{listing.date}</span>
            </div>
          ))}
        	</section>
        </main>
      </div>
    );
  }
}
