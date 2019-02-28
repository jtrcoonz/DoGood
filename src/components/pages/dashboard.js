import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export default function Dashboard(props) {
  return (
    <div className="dashboard-container">
    	<header role="heading">
    		<h1>Your Listings</h1>
    	</header>
    	<main role="main">
    		<Link to="/create">New listing</Link>
    		<section role="region" id="user-listings">
    			<div className="listing">
    				<span>Org 1</span><span>Title</span><span>Date</span>
    			</div>
    			<div className="listing">
    				<span>Org 2</span><span>Title</span><span>Date</span>
    			</div>
    			<div className="listing">
    				<span>Org 3</span><span>Title</span><span>Date</span>
    			</div>
    		</section>
    	</main>
    </div>
  );
}
