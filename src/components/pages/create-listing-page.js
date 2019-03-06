import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export function CreateListingPage(props) {
  return (
    <div className="listing-container">
    	<nav role="navigation" className="nav-bar">
            <h1 className="site-logo">DG</h1>
        </nav>
        <header role="banner">
            <h2 className="page-title">Create Listing</h2>
        </header>
    	<main role="main">
    		<form>
    			<label className="form-label">Title</label>
    			<input type="text" required="true" className="form-input"></input>
    			<label className="form-label">Description</label>
    			<input type="text" required="true" className="form-input"></input>
    			<label className="form-label">Category</label>
    			<select className="form-input">
    				<option value="#">#</option>
    				<option value="#">#</option>
    				<option value="#">#</option>
    				<option value="#">#</option>
    				<option value="#">#</option>
    			</select>
    			<label className="form-label">location</label>
    			<input type="text" required="true" className="form-input"></input>
    			<label className="form-label">Apply link</label>
    			<input type="text" required="true" className="form-input"></input>
                <button type="submit" className="button-style" id="create-button">Create</button>
    		</form>
    	</main>
    </div>
  );
}

export default CreateListingPage;
