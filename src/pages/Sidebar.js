import React from "react";
import DpDate from "../components/DpDate";
import { FaCloud, FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { WiThermometer, WiStars, WiWindy, WiBarometer } from "react-icons/wi";

const Sidebar = ({ weatherData, location, unit }) => {
    return (
        <div className="side__container">
            <div className="side__main">
                <DpDate weatherData={weatherData} />

                <div className="side__main__center">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.5,
                            delay: 0.4,
                        }}
                    >
                        {unit
                            ? weatherData[0].Temperature.Imperial.Value
                            : weatherData[0].Temperature.Metric.Value}
                        <span className="dot"></span>
                        <span className="unit">
                            {unit
                                ? weatherData[0].Temperature.Imperial.Unit
                                : weatherData[0].Temperature.Metric.Unit}
                        </span>
                    </motion.h1>
                </div>

                <FaCloud className="side__main__icon side__main__icon__first" />
                <FaCloud className="side__main__icon side__main__icon__second" />
                <FaCloud className="side__main__icon side__main__icon__third" />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="side__main__center__second"
                >
                    <p>
                        {location[0].LocalizedName},{" "}
                        {location[0].Country.LocalizedName}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeIn",
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="side__main__center__third"
                >
                    <p>{weatherData[0].WeatherText}</p>
                    <div className="dot"></div>
                    <p>
                        Feels like{" "}
                        {unit
                            ? weatherData[0].RealFeelTemperature.Imperial.Value
                            : weatherData[0].RealFeelTemperature.Metric.Value}
                        {unit
                            ? weatherData[0].RealFeelTemperature.Imperial.Unit
                            : weatherData[0].RealFeelTemperature.Metric.Unit}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ x: -350 }}
                    animate={{ x: 0 }}
                    transition={{ ease: "easeOut", duration: 0.2, delay: 0.2 }}
                    className="side__main__bottom"
                >
                    <div className="details">
                        <h4>
                            <WiWindy className="details__icon" />
                            Wind Speed
                            <FaCaretRight />{" "}
                            <span>
                                {unit
                                    ? weatherData[0].Wind.Speed.Imperial.Value
                                    : weatherData[0].Wind.Speed.Metric
                                          .Value}{" "}
                                {unit
                                    ? weatherData[0].Wind.Speed.Imperial.Unit
                                    : weatherData[0].Wind.Speed.Metric.Unit}
                            </span>
                        </h4>
                    </div>
                    <div className="details">
                        <h4>
                            <WiStars className="details__icon" />
                            Visibility
                            <FaCaretRight />
                            <span>
                                {unit
                                    ? weatherData[0].Visibility.Imperial.Value
                                    : weatherData[0].Visibility.Metric
                                          .Value}{" "}
                                {unit
                                    ? weatherData[0].Visibility.Imperial.Unit
                                    : weatherData[0].Visibility.Metric
                                          .Unit}{" "}
                            </span>
                        </h4>
                    </div>
                    <div className="details">
                        <h4>
                            <WiThermometer className="details__icon" />
                            UV Index
                            <FaCaretRight />
                            <span>
                                {weatherData[0].UVIndex}{" "}
                                {weatherData[0].UVIndexText}
                            </span>
                        </h4>
                    </div>
                    <div className="details">
                        <h4>
                            <WiBarometer className="details__icon" />
                            Pressure
                            <FaCaretRight />
                            <span>
                                {unit
                                    ? weatherData[0].Pressure.Imperial.Value
                                    : weatherData[0].Pressure.Metric.Value}{" "}
                                {unit
                                    ? weatherData[0].Pressure.Imperial.Unit
                                    : weatherData[0].Pressure.Metric.Unit}
                            </span>
                        </h4>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sidebar;
