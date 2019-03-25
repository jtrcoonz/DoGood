import React from "react";
import '../pages-styling/create-listing-page.css';

export default class CreateListingPage extends React.Component {
  formSubmitted(event) {
    event.preventDefault();
    let listing = {
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      category: this.categoryInput.value,
      location: this.locationInput.value,
      applyLink: this.applyLinkInput.value
    };
    fetch('api/listings',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${state.token}`
      },
      method: "POST",
      body: JSON.stringify(listing)
    })
    .then(response => {
      console.log(response);
      // window.location.href = "dashboard.js";
    })
    .catch(error => {
      console.log('bad request');
    })
  }
  render() {
    return (
    <div className="listing-container">
    	<nav className="nav-bar">
            <h1 className="site-logo">DG</h1>
        </nav>
        <header role="banner">
            <h2 className="page-title">Create Listing</h2>
        </header>
    	<main role="main">
    		<form id="create-listing-form" onSubmit={(event) => this.formSubmitted(event)}>
    			<label className="form-label" htmlFor="create-title">Title</label>
    			<input type="text" required="true" className="form-input" id="create-title" ref={input => this.titleInput = input}></input>
    			<label className="form-label" htmlFor="create-description">Description</label>
    			<input type="text" required="true" className="form-input" id="create-description" ref={input => this.descriptionInput = input}></input>
    			<label className="form-label" htmlFor="create-category">Category</label>
    			<select className="form-input" id="create-category" ref={input => this.categoryInput = input}>
    				<option value="animals">Animals</option>
    				<option value="arts-culture-humanities">Arts, Culture, Humanities</option>
    				<option value="community-development">Community Development</option>
    				<option value="education">Education</option>
    				<option value="environment">Environment</option>
            <option value="health">Health</option>
            <option value="human-and-civil-rights">Human and Civil Rights</option>
            <option value="human-and-social-services">Human and Social Services</option>
            <option value="international">International</option>
            <option value="research-and-public-policy">Research and Public Policy</option>
            <option value="religion">Religion</option>
    			</select>
    			<label className="form-label" htmlFor="create-location">location</label>
    			<input type="text" required="true" className="form-input" id="create-location" ref={input => this.locationInput = input}></input>
    			<label className="form-label" htmlFor="create-apply-link">Apply link</label>
    			<input type="text" required="true" className="form-input" id="create-apply-link" ref={input => this.applyLinkInput = input}></input>
          <button type="submit" className="button-style" id="create-button">Create</button>
    		</form>
    	</main>
    </div>
    );
  }
};
