import React from "react";
import WeekCard from "./WeekCard";
import { WiCloud, WiDaySunny, WiRain, WiDayCloudy } from "react-icons/wi";
import { motion } from "framer-motion";

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const variants = {
    start: { y: -20, opacity: 0 },
    end: { y: 0, opacity: 1 },
};

const WeatherWeek = ({ weatherWeekData, unit }) => {
    const weatherWeek = weatherWeekData.DailyForecasts;
    return (
        <motion.div
            initial="start"
            animate="end"
            variants={variants}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            className="home__weekly__list"
        >
            {weatherWeek.map((item, index) => {
                const date = new Date(item.Date);
                const num = date.getDay();

                return (
                    <WeekCard
                        key={index}
                        title={days[num]}
                        icon={
                            item.Day.IconPhrase.toLowerCase().includes(
                                "sunny"
                            ) ? (
                                <WiDaySunny style={{ color: "#f8c500" }} />
                            ) : item.Day.IconPhrase.toLowerCase().includes(
                                  "rain"
                              ) ? (
                                <WiRain style={{ color: "#1c7ed6" }} />
                            ) : item.Day.IconPhrase.toLowerCase().includes(
                                  "mostly cloudy"
                              ) ? (
                                <WiDayCloudy />
                            ) : (
                                <WiCloud style={{ color: "#82828b" }} />
                            )
                        }
                        minTemp={
                            unit
                                ? item.Temperature.Minimum.Value
                                : Math.floor(
                                      (item.Temperature.Minimum.Value - 32) *
                                          0.556
                                  )
                        }
                        maxTemp={
                            unit
                                ? item.Temperature.Maximum.Value
                                : Math.floor(
                                      (item.Temperature.Maximum.Value - 32) *
                                          0.556
                                  )
                        }
                        unit={unit}
                    />
                );
            })}
        </motion.div>
    );
};

export default WeatherWeek;
