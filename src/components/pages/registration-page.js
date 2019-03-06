import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export default class RegistrationPage extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.history.push("/dashboard");
  }
  render() {
  return (
    <div className="registration-container">
        <nav role="navigation" className="nav-bar">
            <h1 className="site-logo">DG</h1>
            <Link to="#" className="sign-in-link">Sign in</Link>
        </nav>
        <header role="banner">
            <h2 className="page-title">Sign Up</h2>
        </header>
    	  <main role="main">
      		<form onSubmit={(event) => this.onSubmit(event)}>
      			<label for="form-org-name" className="form-label">Organization Name</label>
      			<input type="text" required="true" id="form-org-name" className="form-input"></input>
      			<label for="form-org-url" className="form-label">Organization URL</label>
      			<input type="text" required="true" id="form-org-url" className="form-input"></input>
      			<label for="form-description" className="form-label">Description</label>
      			<input type="text" required="true" id="form-description" className="form-input"></input>
            <label for="form-username" className="form-label">Username</label>
            <input type="text" required="true" id="form-username" className="form-input"></input>
            <label for="form-username" className="form-label">Password</label>
            <input type="password" required="true" id="form-password" className="form-input"></input>
      			<button type="submit" className="button-style" id="sign-up-button">Sign up</button>
      		</form>
    	  </main>
    </div>
  );}
}
