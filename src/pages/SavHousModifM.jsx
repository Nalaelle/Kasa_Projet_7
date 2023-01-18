import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Dropdown from "../components/Dropdown"; // ca marche mais il faut visé les elements
import Rating from "../components/Rating";
// import star from "../assets/star.svg";
// import imgHome from "../assets/imgHome.jpg"; // image pour le test
import style from "../styles/Housing.module.css";

// import Slideshow from "../components/Slideshow"

const Housing = () => {
    const { id } = useParams();
    // console.log(id);
    const houseID = id;
    console.log(houseID);
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

    useEffect(() => {
        getData();
    }, []);
    // *********

    return (
        <main>
            {/* <Slideshow /> */}

            {data.map((el) => {
                if (el.id === houseID) {
                    // iteration pour afficher les tags
                    const tagIteration = el.tags.map((tag) => (
                        <span key={Math.random()} className={style.tag}>
                            {tag}
                        </span>
                    ));

                    return (
                        <div
                            key={el.id + Math.random()}
                            className={style.infos}
                        >
                            <article className={style.location}>
                                <h1>{el.title}</h1>
                                <p>{el.location}</p>
                                <div>{tagIteration}</div>
                            </article>
                            <article className={style.owner}>
                                <div className={style.infosOwner}>
                                    <p>{el.host.name}</p>
                                    <img
                                        src={el.host.picture}
                                        alt={"Propriétaire " + el.host.name}
                                    />
                                </div>
                                <Rating numberRating={el.rating} />
                                {/* <div
                                    key={Math.random()}
                                    className={style.starbox}
                                >
                                    <span className={style.star}>
                                        <img
                                            src={star}
                                            alt="étoile de notation"
                                        />
                                    </span>
                                    <span className={style.star}>
                                        <img
                                            src={star}
                                            alt="étoile de notation"
                                        />
                                    </span>
                                    <span className={style.star}>
                                        <img
                                            src={star}
                                            alt="étoile de notation"
                                        />
                                    </span>
                                    <span className={style.star}>
                                        <img
                                            src={star}
                                            alt="étoile de notation"
                                        />
                                    </span>
                                    <span className={style.star}>
                                        <img
                                            src={star}
                                            alt="étoile de notation"
                                        />
                                    </span>
                                </div> */}
                            </article>
                        </div>
                    );
                } else {
                    return console.log("pop");
                    // redirection error
                    // <div>
                    //     <h1>nop</h1>
                    //     {/* <Navigate to="/Error" /> */}
                    // </div>
                }
            })}

            <Dropdown />
        </main>
    );
};

export default Housing;
