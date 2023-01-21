import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Rating from "../components/Rating";
import style from "../styles/Housing.module.css";

import { useFetch } from "../components/hooks/FetchApi";

import Carrousel from "../components/Carrousel";

const Housing = () => {
    // hook pour la redirection error
    const navigate = useNavigate();

    // call api
    const { data } = useFetch("../data.json");

    const { id } = useParams();
    const houseID = id;

    // ************************

    useEffect(() => {
        function Verif() {
            let x = 0;
            data.map((el) => {
                if (!(el.id === houseID)) {
                    return (x = x + 1);
                }
                return null;
            });
            if (x >= 20) {
                console.log("redirection page non trouvée");
                navigate("/error");
            }
        }
        Verif();
    }, [data, houseID, navigate]);

    return (
        <main>
            <Carrousel data={data} dataID={houseID} />
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
                            </article>
                        </div>
                    );
                }
                return null;
            })}
            <Dropdown dataUrl="../data.json" dataID={houseID} />
        </main>
    );
};

export default Housing;
