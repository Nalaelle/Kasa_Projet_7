import React, { useState } from "react";
import Arrow from "../assets/arrowDropdown.svg";
import style from "../styles/Carrousel.module.css";

const Carrousel = ({ data, dataID }) => {
    const [countPicture, setCountPicture] = useState(1);
    let arrayPicture = [];

    data.map((el) => {
        if (el.id === dataID) {
            for (let i in el.pictures) {
                arrayPicture.push(el.pictures[i]);
            }
            return { arrayPicture };
        } else return null;
    });

    const counteurImg = arrayPicture.length;
    // accessibilité : tabIndex / onKeyUp

    return (
        <section className={style.carrousel}>
            <img
                tabIndex={0}
                onKeyUp={() => {
                    countPicture > 1 && setCountPicture(countPicture - 1);
                    if (countPicture === 1) {
                        setCountPicture(countPicture - 1 + counteurImg);
                    }
                }}
                role="button"
                className={`${style.arrowCarrouselLeft} ${
                    counteurImg !== 1 ? style.arrows : style.arrowDisplayNone
                }`}
                src={Arrow}
                alt=" fleche de direction précedente"
                onClick={() => {
                    countPicture > 1 && setCountPicture(countPicture - 1);
                    if (countPicture === 1) {
                        setCountPicture(countPicture - 1 + counteurImg);
                    }
                }}
            />
            <div className={style.imageCentral}>
                <img
                    src={arrayPicture[countPicture - 1]}
                    alt="Photograpies de l'appartement"
                />
                <span className={style.counter}>
                    {countPicture} / {arrayPicture.length}
                </span>
            </div>
            <img
                tabIndex={0}
                onKeyUp={() => {
                    countPicture > 1 && setCountPicture(countPicture - 1);
                    if (countPicture === 1) {
                        setCountPicture(countPicture - 1 + counteurImg);
                    }
                }}
                role="button"
                className={`${style.arrowCarrouselRight} ${
                    counteurImg !== 1 ? style.arrows : style.arrowDisplayNone
                }`}
                src={Arrow}
                alt=" fleche de direction suivante"
                onClick={() => {
                    countPicture < counteurImg &&
                        setCountPicture(countPicture + 1);
                    if (countPicture === counteurImg) {
                        setCountPicture(countPicture + 1 - counteurImg);
                    }
                }}
            />
        </section>
    );
};
export default Carrousel;
