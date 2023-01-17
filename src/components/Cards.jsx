import React, { useEffect, useState } from "react";
import style from "../styles/Cards.module.css";
import { NavLink } from "react-router-dom";

function Cards() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("data.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setData(myJson);
            })
            .catch((err) => {
                console.log(err);
                console.log("il y a une erreur");
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <section className={style.homePage}>
            {data.map((el) => (
                <NavLink
                    key={el.id}
                    to={`housing/${el.id}`}
                    className={style.card}
                >
                    <article>
                        <img
                            className={style.imgCard}
                            src={el.cover}
                            alt={el.title}
                        />
                        <p className={style.titleLocation}>{el.title}</p>
                    </article>
                </NavLink>
            ))}
        </section>
    );
}
export default Cards;
