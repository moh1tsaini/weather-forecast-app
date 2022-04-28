import React from "react";

const WeekCard = ({ title, icon, minTemp, maxTemp, unit }) => {
    return (
        <div className="home__weekly__list__card">
            <div className="home__weekly__list__card__day">
                <h4>{title}</h4>
            </div>

            <div className="home__weekly__list__card__icon">{icon}</div>

            <div className="home__weekly__list__card__summary">
                <h4 className="home__weekly__list__card__summary__min__temp">
                    {unit ? `${minTemp}F` : `${minTemp}C`}
                </h4>
                <div className="home__weekly__list__card__summary__bar">
                    <div
                        className="home__weekly__list__card__summary__bar__min"
                        style={
                            unit
                                ? {
                                      width: `${
                                          minTemp <= 40
                                              ? 50
                                              : minTemp >= 60
                                              ? 0
                                              : Math.abs((60 - minTemp) * 10) /
                                                4
                                      }`,
                                  }
                                : {
                                      width: `${
                                          minTemp <= 10
                                              ? 50
                                              : minTemp >= 20
                                              ? 0
                                              : Math.abs((20 - minTemp) * 10) /
                                                2
                                      }%`,
                                  }
                        }
                    ></div>
                    <div
                        className="home__weekly__list__card__summary__bar__max"
                        style={
                            unit
                                ? {
                                      width: `${
                                          maxTemp >= 80
                                              ? 50
                                              : maxTemp <= 60
                                              ? 0
                                              : Math.abs((60 - maxTemp) * 10) /
                                                4
                                      }%`,
                                  }
                                : {
                                      width: `${
                                          maxTemp >= 30
                                              ? 50
                                              : maxTemp <= 20
                                              ? 0
                                              : Math.abs((20 - maxTemp) * 10) /
                                                2
                                      }%`,
                                  }
                        }
                    ></div>
                </div>
                <h4 className="home__weekly__list__card__summary__max__temp">
                    {unit ? `${maxTemp}F` : `${maxTemp}C`}
                </h4>
            </div>
        </div>
    );
};

export default WeekCard;
