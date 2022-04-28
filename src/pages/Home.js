import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import LocationCard from "../components/LocationCard";
import WeatherWeek from "../components/WeatherWeek";
import imgParis from "../images/paris.png";
import imgNewYork from "../images/newyork.png";
import imgLondon from "../images/london.png";
import imgSyd from "../images/sydney.png";
import imgDel from "../images/newdelhi.png";

const variants = {
    start: { y: -20, opacity: 0 },
    end: { y: 0, opacity: 1 },
};

const variants2 = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const Home = ({
    weatherWeekData,
    handleSubmit,
    handleCardClick,
    unit,
    setUnit,
}) => {
    const [name, setName] = useState("");

    return (
        <div className="home__container">
            <motion.div
                initial="start"
                animate="end"
                variants={variants}
                transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
                className="home__navigation"
            >
                <form className="home__search" onSubmit={handleSubmit}>
                    <div className="home__search__box">
                        <FaSearch className="home__search__box__icon" />
                        <input
                            type="text"
                            placeholder="Search new place"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="home__search__btn">
                            Search
                        </button>
                    </div>
                </form>

                <div className="home__navigation__units">
                    <button
                        className={
                            unit
                                ? "home__navigation__units__btn"
                                : "home__navigation__units__btn active"
                        }
                        onClick={() => setUnit(false)}
                    >
                        C
                    </button>
                    <button
                        className={
                            unit
                                ? "home__navigation__units__btn active"
                                : "home__navigation__units__btn"
                        }
                        onClick={() => setUnit(true)}
                    >
                        F
                    </button>
                </div>
            </motion.div>

            <div className="home__title">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={variants2}
                    transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                >
                    <span>Weather </span>Forecast
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
                className="home__box__cards"
            >
                <LocationCard
                    img={imgParis}
                    title={"Paris, France"}
                    handleCardClick={handleCardClick}
                />
                <LocationCard
                    img={imgNewYork}
                    title={"New York, USA"}
                    handleCardClick={handleCardClick}
                />
                <LocationCard
                    img={imgLondon}
                    title={"London, England"}
                    handleCardClick={handleCardClick}
                />
                <LocationCard
                    img={imgSyd}
                    title={"Sydney, Australia"}
                    handleCardClick={handleCardClick}
                />
                <LocationCard
                    img={imgDel}
                    title={"New Delhi"}
                    handleCardClick={handleCardClick}
                />
            </motion.div>

            <WeatherWeek weatherWeekData={weatherWeekData} unit={unit} />
        </div>
    );
};

export default Home;
