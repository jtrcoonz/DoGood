import React from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../config.js";

export default class RegistrationPage extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    let user = {
      //FIX ALL INPUTS
      username: this.usernameInput.value,
      password: this.passwordInput.value
    };
    fetch(`${API_BASE_URL}/api/login`, {
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
        localStorage.setItem("token", response.authToken);
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        console.log("bad request", error);
      });
  }
  render() {
    return (
      <div className="registration-container">
        <nav className="nav-bar">
          <h1 className="site-logo">DG</h1>
          <Link to="#" className="sign-in-link">
            Sign in
          </Link>
        </nav>
        <header role="banner">
          <h2 className="page-title">Sign Up</h2>
        </header>
        <main role="main">
          <form onSubmit={event => this.onSubmit(event)}>
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
        </main>
      </div>
    );
  }
}
