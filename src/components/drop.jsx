import React, { useState } from "react";
import Arrow from "../assets/arrowDropdown.svg";
import style from "../styles/Dropdown.module.css";

function Drop({ title, description, page, tool, id }) {
    const [dropdownValue, setDropdownValue] = useState(true);
    const [equipmentsValue, setEquipmentsValue] = useState(true);

    if (page === "about") {
        return (
            <div
                key={id + Math.random()}
                className={style.dropdown}
                onClick={() => {
                    setDropdownValue(!dropdownValue);
                }}
            >
                <div key={id + Math.random()} className={style.strip}>
                    <h3 key={id + Math.random()} className={style.title}>
                        {title}
                    </h3>
                    <img
                        key={id + Math.random()}
                        src={Arrow}
                        alt="Flèche d'ouverture"
                        className={
                            dropdownValue ? style.arrowClose : style.arrowOpen
                        }
                    />
                </div>
                <p
                    key={id + Math.random()}
                    className={dropdownValue ? style.close : style.open}
                >
                    {description}
                </p>
            </div>
        );
    } else {
        return (
            <div key={Math.random()} className={style.dropdownRow}>
                <div key={id + Math.random()} className={style.dropdownHouse}>
                    <div
                        key={id + Math.random()}
                        className={style.strip}
                        onClick={() => {
                            setDropdownValue(!dropdownValue);
                        }}
                    >
                        <h3 key={id + Math.random()} className={style.title}>
                            Description
                        </h3>
                        <img
                            key={id + Math.random()}
                            src={Arrow}
                            alt="Flèche d'ouverture"
                            className={
                                dropdownValue
                                    ? style.arrowClose
                                    : style.arrowOpen
                            }
                        />
                    </div>
                    <p
                        key={id + Math.random()}
                        className={dropdownValue ? style.close : style.open}
                    >
                        {description}
                    </p>
                </div>
                <div key={id + Math.random()} className={style.dropdownHouse}>
                    <div
                        key={id + Math.random()}
                        className={style.strip}
                        onClick={() => {
                            setEquipmentsValue(!equipmentsValue);
                        }}
                    >
                        <h3 className={style.title}>Équipements</h3>
                        <img
                            key={id + Math.random()}
                            src={Arrow}
                            alt="Flèche d'ouverture"
                            className={
                                equipmentsValue
                                    ? style.arrowClose
                                    : style.arrowOpen
                            }
                        />
                    </div>
                    {/* <p> */}
                    <ul
                        key={id + Math.random()}
                        className={`${
                            equipmentsValue ? style.close : style.open
                        } ${style.containerTools}`}
                    >
                        {tool}
                    </ul>
                    {/* </p> */}
                </div>
            </div>
        );
    }
}

export default Drop;
