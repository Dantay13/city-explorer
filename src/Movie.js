import React from "react";

class Movie extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <img src={this.props.poster_path} alt={this.props.title} />
                <p>{this.props.overview}</p>
                <p>Release date: {this.props.release_date}</p>
                <p>Average Votes: {this.props.average_votes} Total Votes: {this.props.total_votes}</p>
                <p>Popularity: {this.props.popularity}</p>
            </div>
        )
    }
};

export default Movie;