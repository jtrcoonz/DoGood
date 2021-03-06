import React from "react";
import "../pages-styling/create-listing-page.css";
import { API_BASE_URL } from "../../config";

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
    fetch(`${API_BASE_URL}/listings`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "POST",
      body: JSON.stringify(listing)
    })
      .then(response => {
        console.log(response);
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        console.log("bad request");
      });
  }
  render() {
    return (
      <div className="listing-container">
        <nav className="nav-bar">
          <h1 className="site-logo" onClick={() => { window.location.href = "/"; }}>DG</h1>
        </nav>
        <header role="banner">
          <h2 className="page-title">Create Listing</h2>
        </header>
        <main role="main">
          <form
            id="create-listing-form"
            onSubmit={event => this.formSubmitted(event)}
          >
            <label className="form-label" htmlFor="create-title">
              Title
            </label>
            <input
              type="text"
              required="true"
              className="form-input"
              id="create-title"
              ref={input => (this.titleInput = input)}
            />
            <label className="form-label" htmlFor="create-description">
              Description
            </label>
            <input
              type="text"
              required="true"
              className="form-input"
              id="create-description"
              ref={input => (this.descriptionInput = input)}
            />
            <label className="form-label" htmlFor="create-category">
              Category
            </label>
            <select
              className="form-input"
              id="create-category"
              ref={input => (this.categoryInput = input)}
            >
              <option value="Animals">Animals</option>
              <option value="Arts, Culture, Humanities">
                Arts, Culture, Humanities
              </option>
              <option value="Community Development">
                Community Development
              </option>
              <option value="Education">Education</option>
              <option value="Environment">Environment</option>
              <option value="Health">Health</option>
              <option value="Human and Civil Rights">
                Human and Civil Rights
              </option>
              <option value="Human and Social Services">
                Human and Social Services
              </option>
              <option value="International">International</option>
              <option value="Research and Public Policy">
                Research and Public Policy
              </option>
              <option value="Religion">Religion</option>
            </select>
            <label className="form-label" htmlFor="create-location">
              location
            </label>
            <input
              type="text"
              required="true"
              className="form-input"
              id="create-location"
              ref={input => (this.locationInput = input)}
            />
            <label className="form-label" htmlFor="create-apply-link">
              Apply link (https:// included)
            </label>
            <input
              type="text"
              required="true"
              className="form-input"
              id="create-apply-link"
              ref={input => (this.applyLinkInput = input)}
            />
            <button type="submit" className="button-style" id="create-button">
              Create
            </button>
          </form>
        </main>
      </div>
    );
  }
}
