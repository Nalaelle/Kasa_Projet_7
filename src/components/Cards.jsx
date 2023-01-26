import React from "react";
import { useFetch } from "./hooks/UseFetch";
import style from "../styles/Cards.module.css";
import { NavLink } from "react-router-dom";

function Cards() {
    const { data } = useFetch("../data.json");

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
