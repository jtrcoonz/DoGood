import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
    	<nav role="navigation" className="nav-bar">
            <h1 className="site-logo">DG</h1>
        </nav>
        <header role="banner">
            <h2 className="page-title">Your Listings</h2>
        </header>
    	<main role="main" id="dash-main">
    		<Link to="/create" className="button-style">New Listing</Link>
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
