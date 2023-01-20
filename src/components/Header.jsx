import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Header.module.css";
import kasa from "../assets/kasa.png";

function Header() {
    return (
        <header className={style.header}>
            <img src={kasa} alt="Logo de l'entreprise Kasa" />
            <nav>
                <ul className={style.containerNav}>
                    {/* Attention le nav is active ne fonctionne plus à voir avec les modules css */}
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li className={style.dotNavigation}>Acceuil</li>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li className={style.dotNavigation}>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
