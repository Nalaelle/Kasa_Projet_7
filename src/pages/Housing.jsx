import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown"; // ca marche mais il faut visé les elements
import star from "../assets/star.svg";
import imgHome from "../assets/imgHome.jpg"; // image pour le test
import style from "../styles/Housing.module.css";

// import Slideshow from "../components/Slideshow"

const Housing = (props) => {
    console.log(props);
    const { id } = useParams();
    console.log(id);

    // POUR LE SVG => MODIFIE ETAT COULEUR

    // const [colorValue, setColorValue] = useState(false);
    // const color = colorValue ? "#E3E3E3" : "#ff6060";
    // const stateColor = () => {
    //     setColorValue(!colorValue);
    //     console.log(!colorValue);
    // };

    // *********
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("../data.json")
            .then(function (res) {
                return res.json();
            })
            .then(function (myJson) {
                setData(myJson);
            })
            .catch((err) => {
                console.log(err);
                console.log("il y a une erreur dropdown");
            });
    };
    console.log(data);
    useEffect(() => {
        getData();
    }, []);
    // *********

    return (
        <main>
            {/* <Slideshow /> */}
            <div className={style.infos}>
                <article className={style.location}>
                    <h1>Titre du logement</h1>
                    <p>location</p>
                    <div>
                        <span className={style.tag}>Tag faire avec map </span>
                        <span className={style.tag}>Tag 2</span>
                    </div>
                </article>
                <article className={style.owner}>
                    <div className={style.infosOwner}>
                        <p>Nom du proprietaire</p>
                        <img src={imgHome} alt="Propriétaire" />
                    </div>
                    <div className={style.starbox}>
                        <span className={style.star}>
                            <img src={star} alt="étoile de notation" />
                        </span>
                        <span className={style.star}>
                            <img src={star} alt="étoile de notation" />
                        </span>
                        <span className={style.star}>
                            <img src={star} alt="étoile de notation" />
                        </span>
                        <span className={style.star}>
                            <img src={star} alt="étoile de notation" />
                        </span>
                        <span className={style.star}>
                            <img src={star} alt="étoile de notation" />
                        </span>

                        {/* SVG pour avoir une etoile qui change de couleur à revoir */}

                        {/* <span className={style.star}>
                            <svg
                                width="50"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                                    fill={color}
                                    onClick={stateColor}
                                />
                            </svg>
                        </span> */}
                    </div>
                </article>
            </div>
            <Dropdown />
        </main>
    );
};

export default Housing;
