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

        return weatherData.daily.time.map((date, index) => {
            const weatherCode = weatherData.daily.weathercode[index];
            const weatherInfo = WMOWeatherCode[weatherCode.toString()];  
            const weatherDescription = weatherInfo ? weatherInfo.day.description : "Weather description not available";
            const weatherImage = weatherInfo ? weatherInfo.day.image : null;
            return (
                <div key={index} className="weather-day">
                    <h3>{new Date(date).toLocaleDateString()}</h3>
                    <p><strong>Weather:</strong> {weatherDescription}</p>
                    {weatherImage && <img src={weatherImage} alt={weatherDescription} style={{ width: '50px' }} />}
                    <p><strong>Temperature:</strong> Max {weatherData.daily.temperature_2m_max[index]}°C, Min {weatherData.daily.temperature_2m_min[index]}°C</p>
                    <p><strong>Precipitation:</strong> {weatherData.daily.precipitation_sum[index]} mm</p>
                    <p><strong>Snowfall:</strong> {weatherData.daily.snowfall_sum[index]} cm</p>
                    <p><strong>Wind Speed:</strong> Up to {weatherData.daily.windspeed_10m_max[index]} km/h</p>
                </div>
            );
        });
    };

    return (
        <div className="weather__wrapper">
            <h2 className="weather__header">5-Day Weather Forecast</h2>
            {renderForecast()}
        </div>
    );
}

export default WeatherInfo;
