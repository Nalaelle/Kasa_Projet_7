import React, { useState } from "react";
import Arrow from "../assets/arrowDropdown.svg";
import style from "../styles/Carrousel.module.css";

const Carrousel = ({ data, dataID }) => {
    // console.log(data, "carrousel");
    // console.log(dataID, " data id carrousel");
    const [previousPicture, setPreviousPicture] = useState(0);
    const [nextPicture, setNextPicture] = useState(0);

    function getPrevious() {
        console.log(previousPicture);
        console.log(setPreviousPicture);
    }

    function getNext() {
        console.log(nextPicture);
        console.log(setNextPicture);
    }

    let imgUrl;
    let counter;
    let arrayPicture = []; // ya plus qu'a iterer sur le tableau pour recup img et le counter
    data.map((el) => {
        if (el.id === dataID) {
            // console.log(el.pictures);
            for (let i in el.pictures) {
                imgUrl = el.pictures[i];
                counter = i;
                arrayPicture.push(imgUrl);
                console.log("Array img", arrayPicture);
                // console.log(imgUrl);
                // console.log(counter);
            }
            return { counter, imgUrl };
        } else return null;
    });

    return (
        <section className={style.carrousel}>
            <img
                className={style.arrowCarrouselLeft}
                src={Arrow}
                alt=" fleche de direction précedente"
                onClick={getPrevious}
            />
            <div className={style.imageCentral}>
                <img src={imgUrl} alt="Photograpies de l'appartement" />
                <span className={style.counter}>{counter}</span>
            </div>
            <img
                className={style.arrowCarrouselRight}
                src={Arrow}
                alt=" fleche de direction suivante"
                onClick={getNext}
            />
        </section>
    );
};
export default Carrousel;

// Counter + chevron + image box img
