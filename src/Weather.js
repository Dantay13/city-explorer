import React from "react";
import WeatherDay from "./WeatherDay";


class Weather extends React.Component {
    render() {
        return (
            <>
                <h2>Daily Forecast</h2>
                {this.props.weatherData.map((city, idx) =>
                    <WeatherDay date={city.date} description={city.description} />)}
            </>
        )
    }
}

export default Weather;