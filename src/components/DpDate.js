import React from "react";
import { motion } from "framer-motion";
import {
    WiDaySunny,
    WiCloudy,
    WiDayRain,
    WiShowers,
    WiSnow,
    WiCloud,
    WiFog,
    WiThunderstorm,
    WiWindy,
} from "react-icons/wi";

const variants3 = {
    start: { y: -15 },
    end: { y: 0 },
};

const DpDate = ({ weatherData }) => {
    const weatherText = weatherData[0].WeatherText.toLowerCase();
    const d = new Date().toUTCString();
    const index = d.indexOf("2022");
    const newDate = d.slice(0, index);
    return (
        <div className="side__main__top">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.5, delay: 0.3 }}
            >
                {weatherText.includes("sunny") ? (
                    <WiDaySunny className="side__main__top__icon" />
                ) : weatherText.includes("cloudy") ? (
                    <WiCloudy className="side__main__top__icon" />
                ) : weatherText.includes("rain") ? (
                    <WiDayRain className="side__main__top__icon" />
                ) : weatherText.includes("showers") ? (
                    <WiShowers className="side__main__top__icon" />
                ) : weatherText.includes("snow") ? (
                    <WiSnow className="side__main__top__icon" />
                ) : weatherText.includes("fog") ? (
                    <WiFog className="side__main__top__icon" />
                ) : weatherText.includes("t-storms") ? (
                    <WiThunderstorm className="side__main__top__icon" />
                ) : weatherText.includes("windy") ? (
                    <WiWindy className="side__main__top__icon" />
                ) : (
                    <WiCloud className="side__main__top__icon" />
                )}
            </motion.div>

            <motion.div
                initial={{ y: -15 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                className="side__main__top__date"
            >
                <p>Today</p>
                <p>{newDate}</p>
            </motion.div>
        </div>
    );
};

export default DpDate;
