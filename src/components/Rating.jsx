import React from "react";
// import React, { useEffect, useState } from "react";
import { useWindowSize } from "./hooks/ScreenSize";
import style from "../styles/Housing.module.css";

const Rating = ({ numberRating }) => {
    const starNumber = [1, 2, 3, 4, 5];
    // console.log(numberRating);
    const { windowSize } = useWindowSize();

    console.log("windowSize : ", windowSize);

    let ecartStar = "50";
    let sizeStar = "0 0 30 30 ";
    if (windowSize.width <= 768) {
        sizeStar = "0 0 50 50 ";
        ecartStar = "30";
    }

    return (
        <div className={style.stars}>
            {starNumber.map((el) =>
                el <= numberRating ? (
                    <span key={el + Math.random()}>
                        <svg
                            width={ecartStar}
                            height="30"
                            viewBox={sizeStar}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                fill="#ff6060"
                            />
                        </svg>
                    </span>
                ) : (
                    <span key={el + Math.random()}>
                        <svg
                            width={ecartStar}
                            height="30"
                            viewBox={sizeStar}
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                fill="#E3E3E3"
                            />
                        </svg>
                    </span>
                )
            )}
        </div>
    );
};

export default Rating;
