import React from "react";
import "../pages-styling/result.css";

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDetails: false
    };
  }

  toggleDetails() {
    this.setState({
      displayDetails: !this.state.displayDetails
    });
  }

  render() {
    return (
      <div className="result">
        <span className="org-name">{this.props.listing.title}</span>
        <span className="position-title"><a href = {`${this.props.listing.applyLink}`}>{this.props.listing.title}</a></span>
        <span className="post-date">{this.props.listing.date.toString().slice(0, 10)}</span>
        <button className="drop-arrow" onClick={() => this.toggleDetails()}>
          {this.state.displayDetails ? "▲" : "▼"}
        </button>

        {this.state.displayDetails ? (
          <div className="result-details">
            <span className="result-category">
              <span className="detail-header">Category</span>
              <span>: </span>
              {this.props.listing.category}
              <br></br>
            </span>
            <span className="result-location">
              <span className="detail-header">Location</span>
              <span>: </span>
              {this.props.listing.location}
              <br></br>
            </span>
            <span className="result-description">
              <span className="detail-header">Description</span>
              <span>: </span>
              {this.props.listing.description}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}
