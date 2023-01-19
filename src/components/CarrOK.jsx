import React, { useState } from "react";
import Arrow from "../assets/arrowDropdown.svg";
import style from "../styles/Carrousel.module.css";

const Carrousel = ({ data, dataID }) => {
    const [counterImg, setCounterImg] = useState(1);
    const [previousPicture, setPreviousPicture] = useState(counterImg);
    const [nextPicture, setNextPicture] = useState(counterImg);

    let boolPrevious = false;
    let boolNext = false;

    function setState() {
        // console.log(boolPrevious, "previous", boolNext, "Next");

        if (boolPrevious) {
            if (previousPicture === 1) {
                setPreviousPicture(previousPicture + counter - 1);
                setCounterImg(previousPicture + counter - 1);
                setNextPicture(previousPicture + counter - 1);
            } else {
                setPreviousPicture(previousPicture - 1);
                setCounterImg(previousPicture - 1);
                setNextPicture(previousPicture - 1);
            }
        }
        if (boolNext) {
            if (nextPicture === counter) {
                setNextPicture(nextPicture - counter + 1);
                setCounterImg(nextPicture - counter + 1);
                setPreviousPicture(nextPicture - counter + 1);
            } else {
                setNextPicture(nextPicture + 1);
                setCounterImg(nextPicture + 1);
                setPreviousPicture(nextPicture + 1);
            }
        }
    }

    setState();

    let imgUrl;
    let counter = 0;
    let arrayPicture = [];

    data.map((el) => {
        if (el.id === dataID) {
            for (let i in el.pictures) {
                imgUrl = el.pictures[i];
                counter = ++i;
                arrayPicture.push(imgUrl);
            }
            console.log("total", counter);
            return { counter, imgUrl };
        } else return null;
    });

    const imgPrint = arrayPicture[counterImg - 1];

    console.log("******");
    console.log(previousPicture, "prev");
    console.log(nextPicture, "next");
    console.log(counterImg, "count");

    return (
        <section className={style.carrousel}>
            <img
                className={style.arrowCarrouselLeft}
                src={Arrow}
                alt=" fleche de direction précedente"
                onClick={() => {
                    boolPrevious = true;
                    setState();
                }}
            />
            <div className={style.imageCentral}>
                <img src={imgPrint} alt="Photograpies de l'appartement" />
                <span className={style.counter}>
                    {counterImg} / {counter}
                </span>
            </div>
            <img
                className={style.arrowCarrouselRight}
                src={Arrow}
                alt=" fleche de direction suivante"
                onClick={() => {
                    boolNext = true;
                    setState();
                }}
            />
        </section>
    );
};
export default Carrousel;
