import React from "react";
import "../pages-styling/result.css";
import { API_BASE_URL } from "../../config";
// import { NONAME } from "dns";

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

  deleteResult = () => {
    fetch(`${API_BASE_URL}/listings/${this.props.listing.id}`, {
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const deleteButton1 = this.props.deleteButton == 'x' 
                       ? <span className="delete-button" id="delete-button-1" onClick={this.deleteResult}>{this.props.deleteButton}</span>
                       : '';
    const deleteButton2 = this.props.deleteButton == 'x' 
                       ? <span className="delete-button" id="delete-button-2" onClick={this.deleteResult}>{this.props.deleteButton}</span>
                       : '';
    const hidden = {
      display: 'none' 
    };
    return (
      <div className="result">
        <div className="result-basic">
          <span className="org-name">{this.props.listing.user.organizationName}</span>
          <span className="position-title"><a href = {`https://${this.props.listing.applyLink}`} target="_blank">{this.props.listing.title}</a></span>
          <span className="post-date">{this.props.listing.date.toString().slice(0, 10)}</span>
          {deleteButton1}
          <button className="drop-arrow" onClick={() => this.toggleDetails()}>
            {this.state.displayDetails ? "▲" : "▼"}
          </button>
        </div>
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
            <span className="result-delete-small-px" style={hidden}>
              <span className="detail-header">Delete</span>
              <span>: </span>
              {deleteButton2}
            </span>
            
          </div>
        ) : null}
      </div>
    );
  }
}
