import React from "react";
import Dropdown from "../components/Dropdown";
import style from "../styles/About.module.css";

const About = () => {
    return (
        <main className={style.main}>
            <div className={style.imgBanner}></div>
            <Dropdown />
        </main>
    );
};

export default About;

// Dropdown titre dynamique et contenu
