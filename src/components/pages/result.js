import React from "react";

export default class Result extends React.Component {
    render() {
        return(
            <div className="result">
                <span className="org-name">{this.props.listing.title}</span>
                <span className="position-title">{this.props.listing.title}</span>
                <span className="post-date">{this.props.listing.date}</span>
                    <div className="result-details">
                        <span className="result-category">{this.props.listing.category}</span>
                        <span className="result-location">{this.props.listing.location}</span>
                        <span className="result-description">{this.props.listing.description}</span>
                    </div>
            </div>
        )
    }
}