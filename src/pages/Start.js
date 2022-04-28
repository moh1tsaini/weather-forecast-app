import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const variants2 = {
    start: { y: -25, opacity: 0 },
    end: { y: 0, opacity: 1 },
};

const Start = ({ handleSubmit }) => {
    const [name, setName] = useState("");
    return (
        <div className="start__container">
            <div className="start__logo">
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ ease: "easeIn", duration: 1 }}
                >
                    Weather <span>Forecast</span>
                </motion.h1>
            </div>

            <motion.div
                initial="start"
                animate="end"
                variants={variants2}
                transition={{ ease: "easeOut", duration: 0.8, delay: 0.8 }}
                className="start__search"
            >
                <form className="start__search__form" onSubmit={handleSubmit}>
                    <div className="start__search__input__box">
                        <FaSearch className="start__search__input__icon" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <motion.button
                        initial="hidden"
                        animate="visible"
                        variants={variants}
                        transition={{ ease: "easeIn", duration: 1 }}
                        type="submit"
                        className="start__search__btn"
                    >
                        Search
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Start;
