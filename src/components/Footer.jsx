import React from "react";

import style from "../styles/Footer.module.css";
import logoFooter from "../assets/logoFooter.png";

function Footer() {
    return (
        <footer className={style.footer}>
            <img src={logoFooter} alt="Logo de l'entreprise Kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    );
}

export default Footer;
