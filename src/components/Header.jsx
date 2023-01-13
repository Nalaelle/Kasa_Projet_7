import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Header.module.css";
import kasa from "../assets/kasa.png";

function Header() {
    return (
        <div className={style.header}>
            <img src={kasa} alt="Logo de l'entreprise Kasa" />
            <nav>
                <ul>
                    <NavLink
                        to="/"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>Acceuil</li>
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={(nav) => (nav.isActive ? "nav-active" : "")}
                    >
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
