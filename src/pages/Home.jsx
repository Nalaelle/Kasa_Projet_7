import React from "react";

import style from "../styles/Home.module.css";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <main className={style.main}>
            <div className={style.imgBanner}>
                <p>
                    <span> Chez vous, </span>
                    <span>partout et ailleurs</span>
                </p>
            </div>
            <Cards />
        </main>
    );
};

export default Home;
