import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import '../pages-styling/landing-page.css';

export default function LandingPage(props) {
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
    			<div className="result">
    				<span className="org-name">Org 1</span><span className="position-title">Title</span><span className="post-date">Date</span>
    			</div>
    			<div className="result">
    				<span className="org-name">Org 2</span><span className="position-title">Title</span><span className="post-date">Date</span>
    			</div>
    			<div className="result">
    				<span className="org-name">Org 3</span><span className="position-title">Title</span><span className="post-date">Date</span>
    			</div>
    		</section>
    	</main>
  	</div>
  );
}
