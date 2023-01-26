import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Header.module.css";
// import "../styles/Header.css";
import kasa from "../assets/kasa.png";

function Header() {
    return (
        <header className={style.header}>
            <img src={kasa} alt="Logo de l'entreprise Kasa" />
            <nav className={style.containerNav}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? style.linkActive : style.link
                    }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? style.linkActive : style.link
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;

// function Header() {
//     return (
//         <header className="header">
//             <img src={kasa} alt="Logo de l'entreprise Kasa" />
//             <nav>
//                 <ul className="containerNav">
//                     <NavLink
//                         to="/"
//                         className={(nav) => (nav.isActive ? "nav-active" : "")}
//                     >
//                         <li className="dotNavigation">Accueil</li>
//                     </NavLink>
//                     <NavLink
//                         to="/about"
//                         className={(nav) => (nav.isActive ? "nav-active" : "")}
//                     >
//                         <li className="dotNavigation">A Propos</li>
//                     </NavLink>
//                 </ul>
//             </nav>
//         </header>
//     );
// }

// export default Header;
