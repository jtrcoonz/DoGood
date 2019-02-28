import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export function CreateListingPage(props) {
  return (
    <div className="listing-container">
    	<header role="heading">
    		<h1>Create Listing</h1>
    	</header>
    	<main role="main">
    		<form>
    			<label>Title</label>
    			<input type="text" required="true"></input>
    			<label>Description</label>
    			<input type="text" required="true"></input>
    			<label>Category</label>
    			<select>
    				<option value="#">#</option>
    				<option value="#">#</option>
    				<option value="#">#</option>
    				<option value="#">#</option>
    				<option value="#">#</option>
    			</select>
    			<label>location</label>
    			<input type="text" required="true"></input>
    			<label>Apply link</label>
    			<input type="text" required="true"></input>
    		</form>
    	</main>
    </div>
  );
}

export default CreateListingPage;
