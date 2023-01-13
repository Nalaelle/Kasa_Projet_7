import React from "react";

import style from "../styles/Home.module.css";
import Cards from "../components/Cards";

// import FetchApi from "../components/FetchApi";

const Home = () => {
    return (
        <main className={style.main}>
            <div className={style.imgBanner}>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <Cards />
        </main>
    );
};

export default Home;
