import React from "react";

import style from "../styles/Housing.module.css";

const Rating = ({ numberRating }) => {
    // ECOUTE DU CLICK SUR L ETOILE => il faut modifier la aleur de ' fill={color} '
    // ENLEVER LE MAP et ajouter : onClick={stateColor} ainsi que le hook useState ...

    // const [colorValue, setColorValue] = useState(false);
    // const color = colorValue ? "#E3E3E3" : "#ff6060";
    // const stateColor = () => {
    //     setColorValue(!colorValue);
    //     console.log(!colorValue);
    // };

    const starNumber = [1, 2, 3, 4, 5];
    // console.log(numberRating);

    return (
        <div>
            {starNumber.map((el) =>
                el <= numberRating ? (
                    <span key={el + Math.random()} className={style.star}>
                        <svg
                            width="50"
                            height="30"
                            viewBox="0 0 30 30"
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
                    <span key={el + Math.random()} className={style.star}>
                        <svg
                            width="50"
                            height="30"
                            viewBox="0 0 30 30"
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
