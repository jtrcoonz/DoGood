import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config.js";

export default class RegistrationPage extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let user = {
      organizationName: this.orgNameInput.value,
      organizationUrl: this.orgUrlInput.value,
      organizationDescription: this.orgDescriptionInput.value,
      username: this.usernameInput.value,
      password: this.passwordInput.value
    };
    fetch(`${API_BASE_URL}/users`, {
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(response => {
      console.log(response);
      this.props.history.push("/login");
    })
    .catch(error => {
      event.preventDefault();
      {('.username-password-error-message').html(error.message)}
    });
  }
  render() {
    return (
      <div className="registration-container">
        <nav className="nav-bar">
          <h1 className="site-logo" onClick={() => { window.location.href = "/"; }}>DG</h1>
        </nav>
        <Link to="/login" className="sign-in-link">
          Sign in
        </Link>
        <header role="banner">
          <h2 className="page-title">Sign Up</h2>
        </header>
        <main role="main">
          <form onSubmit={event => this.onSubmit(event)}>
            <label htmlFor="form-org-name" className="form-label">
              Organization Name
            </label>
            <input
              type="text"
              required="true"
              id="form-org-name"
              className="form-input"
              ref={input => (this.orgNameInput = input)}
            />
            <label htmlFor="form-org-url" className="form-label">
              Organization URL
            </label>
            <input
              type="text"
              required="true"
              id="form-org-url"
              className="form-input"
              ref={input => (this.orgUrlInput = input)}
            />
            <label htmlFor="form-description" className="form-label">
              Description
            </label>
            <input
              type="text"
              required="true"
              id="form-description"
              className="form-input"
              ref={input => (this.orgDescriptionInput = input)}
            />
            <label htmlFor="form-username" className="form-label">
              Username
            </label>
            <input
              type="text"
              required="true"
              id="form-username"
              className="form-input"
              ref={input => (this.usernameInput = input)}
            />
            <label htmlFor="form-username" className="form-label">
              Password
            </label>
            <input
              type="password"
              required="true"
              id="form-password"
              className="form-input"
              ref={input => (this.passwordInput = input)}
            />
            <button type="submit" className="button-style" id="sign-up-button">
              Sign up
            </button>
          </form>
          <div className="username-password-error-message"></div>
        </main>
      </div>
    );
  }
}
