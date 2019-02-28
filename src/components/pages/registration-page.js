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
    	<header role="heading">
    		<h1>Sign Up</h1>
    	</header>
    	<main role="main">
      		<form onSubmit={(event) => this.onSubmit(event)}>
      			<label>Organization Name</label>
      			<input type="text" required="true"></input>
      			<label>Organization URL</label>
      			<input type="text" required="true"></input>
      			<label>Description</label>
      			<input type="text" required="true"></input>
      			<button type="submit">Sign up</button>
      		</form>
    	</main>
    </div>
  );}
}
