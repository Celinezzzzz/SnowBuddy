import { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherInfo.scss";
import WMOWeatherCode from "../../assets/WMO/WMO";

function WeatherInfo({ itemId }) {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/resorts/${itemId}/weather`);
                if (response.status === 200 && response.data.weatherData) {
                    setWeatherData(response.data.weatherData); 
                    console.log('Weather Data:', response.data); 
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        if (itemId) {
            fetchWeatherData();
        }
    }, [itemId]);

    const renderForecast = () => {
        if (!weatherData || !weatherData.daily) {
            return <p>Loading weather data or data is incomplete...</p>;
        }

        return (
            <div className="weather-table">
                <div className="weather-row header">
                    <div>Date</div>
                    <div>Precipitation</div>
                    <div>Snowfall</div>
                    <div>Weather</div>
                    <div>Temperature Max/Min</div>
                    <div>Wind Speed</div>
                </div>
                {weatherData.daily.time.map((time, index) => {
                    const weatherCode = weatherData.daily.weathercode[index];
                    const weatherInfo = WMOWeatherCode[weatherCode.toString()];
                    const weatherDescription = weatherInfo ? weatherInfo.day.description : "Not available";
                    const weatherImage = weatherInfo ? weatherInfo.day.image : null;
                    return (
                        <div key={index} className="weather-row">
                            <div>{new Date(time).toLocaleDateString()}</div>
                            <div>{weatherData.daily.precipitation_sum[index]} mm</div>
                            <div>{weatherData.daily.snowfall_sum[index]} cm</div>
                            <div className="weather-condition">
                                <img src={weatherImage} alt={weatherDescription} />
                                <span>{weatherDescription}</span>
                            </div>
                            <div>{weatherData.daily.temperature_2m_max[index]}°C / {weatherData.daily.temperature_2m_min[index]}°C</div>
                            <div>{weatherData.daily.windspeed_10m_max[index]} km/h</div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="weather__wrapper">
            <h2 className="weather__header">5-Day Weather Forecast</h2>
            {renderForecast()}
        </div>
    );
}

export default WeatherInfo;
