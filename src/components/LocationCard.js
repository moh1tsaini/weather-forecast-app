import React from "react";

const LocationCard = ({ title, img, handleCardClick }) => {
    return (
        <div
            className="home__box__cards__item"
            onClick={() => {
                handleCardClick(title);
            }}
        >
            <div
                className="home__box__cards__item__img"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                }}
            ></div>
            <div className="home__box__cards__item__title">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default LocationCard;
