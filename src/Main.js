import axios from "axios";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
// import Map from "./Map";
import Weather from "./Weather";
import Movies from './Movies';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayInfo: false,
            showModal: false,
            city: '',
            cityData: {},
            weatherData: [],
            lat: '',
            lon: '',
            movieData: [],
        }
    }

    handleSearchInput = e => {
        let cityName = e.target.value;
        this.setState({
            city: cityName
        },
            () => console.log(this.state.city)
        )
    }

    displaySearch = async (e) => {
        // e.preventDefault();

        try {
            let response = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`)
            console.log(response.data);
            let lat = response.data[0].lat;
            let lon = response.data[0].lon;
            this.setState({
                displayInfo: true,
                cityData: response.data[0],
                lat: lat,
                lon: lon,
            });
            this.displayWeather(lat, lon);
            this.displayMovie();
        }
        catch (error) {
            this.setState({
                showModal: true,
            });
        }
    };

    displayWeather = async () => {
        // e.preventDefault();

        try {
            let weatherResponse = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.lat}&lon=${this.state.lon}`);
            this.setState({
                weatherData: weatherResponse.data,
            });
            console.log(weatherResponse.data);
        }
        catch (error) {
            this.setState({
                showModal: true,
            });
        }
    };

    displayMovie = async () => {
        // e.preventDefault();

        try {
            let movieResponse = await axios.get(`${process.env.REACT_APP_SERVER}/movie?city=${this.state.city}`);
            this.setState({
                movieData: movieResponse.data,
            });
            console.log(movieResponse.data);
        }
        catch (error) {
            this.setState({
                showModal: true,
            });
        }
    }

    render() {
        return (
            <>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Enter City</Form.Label>
                            <Form.Control type="text" onInput={this.handleSearchInput} />
                        </Form.Group>
                        <Button onClick={this.displaySearch}>Explore!</Button>
                    </Form>
                </Container>

                {this.state.displayInfo &&
                    <>
                        <h2>{this.state.cityData.display_name}</h2>
                        <p>Lat:{this.state.cityData.lat} Lon:{this.state.cityData.lon}</p>
                        {/* <Map lat={this.state.cityData.lat} lon={this.state.cityData.lon}/> */}
                        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`
                        } alt={this.props.city} height={500} />
                        <Weather className="weather"
                            weatherData={this.state.weatherData} />
                        <div>
                            {this.state.movieData.length > 0 &&
                                <Movies movieData={this.state.movieData} />
                            }
                        </div>
                    </>}
            </>
        );
    }
}

// date: serverResponse.data[0],
// forecast: serverResponse.data[0],

// let server = `http://localhost:3001/weather?searchQuery=${this.state.city}`

// let serverResponse = await axios.get(server);

// console.log(serverResponse.data[0]);

export default Main;