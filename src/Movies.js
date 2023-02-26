import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
    render() {
        console.log(this.props.movieData);
        return (
            <>
                <h2>Movies:</h2>
                <ul>
                    {this.props.movieData.map((movie, idx) => {
                        return (
                            <Movie
                                key={idx}
                                title={movie.title}
                                overview={movie.overview}
                                average_votes={movie.average_votes}
                                total_votes={movie.total_votes}
                                poster_path={movie.poster_path}
                                popularity={movie.popularity}
                                released_date={movie.released_date}
                            />
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default Movies;