import React, { useState } from "react";
import Start from "./pages/Start";
import Loading from "./pages/Loading";
import Home from "./pages/Home";
import Sidebar from "./pages/Sidebar";

const App = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [weatherWeekData, setWeatherWeekData] = useState([]);
    const [location, setLocation] = useState([]);
    const [showStart, setShowStart] = useState(true);
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchLocationData(e.target[0].value);
        setShowStart(false);
    };

    const handleCardClick = (text) => {
        const title = text.split(",")[0];
        fetchLocationData(title);
    };

    const fetchLocationData = async (text) => {
        setLoading(true);
        try {
            const req = await fetch(
                `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=nT9pbYyOigoQ4vn0WGTemgbQEvGENQ9Y&q=${text}`
            );
            const data = await req.json();
            setLocation(data);

            const fetchWeather = async () => {
                const req2 = await fetch(
                    `http://dataservice.accuweather.com/currentconditions/v1/${data[0].Key}?apikey=nT9pbYyOigoQ4vn0WGTemgbQEvGENQ9Y&details=true`
                );
                const data2 = await req2.json();
                setWeatherData(data2);
            };

            const fetchWeekWeather = async () => {
                const req3 = await fetch(
                    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data[0].Key}?apikey=nT9pbYyOigoQ4vn0WGTemgbQEvGENQ9Y&details=true`
                );
                const data3 = await req3.json();
                setWeatherWeekData(data3);
                setLoading(false);
            };
            fetchWeather();
            fetchWeekWeather();
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <Loading />;
    }

    if (showStart) {
        return <Start handleSubmit={handleSubmit} />;
    }

    if (!showStart) {
        return (
            <div className="main__container">
                <Sidebar
                    weatherData={weatherData}
                    location={location}
                    unit={unit}
                />
                <Home
                    weatherWeekData={weatherWeekData}
                    handleSubmit={handleSubmit}
                    handleCardClick={handleCardClick}
                    unit={unit}
                    setUnit={setUnit}
                />
            </div>
        );
    }
};

export default App;
