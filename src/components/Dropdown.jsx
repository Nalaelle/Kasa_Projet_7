import React, { useState } from "react";
import { useFetch } from "./hooks/FetchApi";
import style from "../styles/Dropdown.module.css";
import Arrow from "../assets/arrowDropdown.svg";

function Dropdown({ dataUrl, dataID }) {
    // console.log(dataUrl);
    // console.log(dataID);
    const { data } = useFetch(dataUrl);

    const [dropdownValue, setDropdownValue] = useState(true);

    const handleStrip = (id) => {
        // console.log(id, "id");
        // e.stopPropagation();
        // e.preventDefault();
        setDropdownValue(!dropdownValue);
        // const ouverture = dropdownValue ? style.close : style.open;
        // console.log(!dropdownValue);
    };

    // switch ??
    if (dataUrl === "../infos.json") {
        return (
            <section>
                {data.map((el) => (
                    <div
                        className={style.dropdown}
                        key={el.id + 1}
                        onClick={handleStrip}
                    >
                        <div className={style.strip} key={el.id + 2}>
                            <h3 className={style.title}>{el.title}</h3>
                            <img
                                src={Arrow}
                                alt="Flèche d'ouverture"
                                className={
                                    dropdownValue
                                        ? style.arrowClose
                                        : style.arrowOpen
                                }
                                data-id={el.id}
                            />
                        </div>
                        <p className={dropdownValue ? style.close : style.open}>
                            {el.description}
                        </p>
                    </div>
                ))}
            </section>
        );
    } else {
        return (
            <section>
                {data.map((el) => {
                    if (el.id === dataID) {
                        // iteration pour afficher les equipements => tools
                        const toolsIteration = el.equipments.map((tools) => (
                            <li key={el.id + Math.random()}>{tools}</li>
                        ));
                        return (
                            <div key={el.id + Math.random()}>
                                <div
                                    className={style.dropdown}
                                    key={el.id + 3}
                                    // onClick={handleStrip}
                                    onClick={handleStrip}
                                >
                                    <div
                                        className={style.strip}
                                        key={el.id + 4}
                                    >
                                        <h3 className={style.title}>
                                            Description
                                        </h3>
                                        <img
                                            src={Arrow}
                                            alt="Flèche d'ouverture"
                                            className={
                                                dropdownValue
                                                    ? style.arrowClose
                                                    : style.arrowOpen
                                            }
                                            data-id={el.id}
                                        />
                                    </div>
                                    <p
                                        className={
                                            dropdownValue
                                                ? style.close
                                                : style.open
                                        }
                                    >
                                        {el.description}
                                    </p>
                                </div>
                                <div
                                    className={style.dropdown}
                                    key={el.id + 5}
                                    onClick={handleStrip}
                                >
                                    <div
                                        className={style.strip}
                                        key={el.id + 6}
                                    >
                                        <h3 className={style.title}>
                                            Équipements
                                        </h3>
                                        <img
                                            src={Arrow}
                                            alt="Flèche d'ouverture"
                                            className={
                                                dropdownValue
                                                    ? style.arrowClose
                                                    : style.arrowOpen
                                            }
                                            data-id={el.id}
                                        />
                                    </div>
                                    {/* <p
                                        className={
                                            dropdownValue
                                                ? style.close
                                                : style.open
                                        }
                                    > */}
                                    {/* {el.equipments} */}
                                    <ul
                                        key={Math.random()}
                                        className={style.tools}
                                    >
                                        {toolsIteration}
                                    </ul>
                                    {/* </p> */}
                                </div>
                            </div>
                        );
                    } else return null;
                })}
            </section>
        );
    }
}
export default Dropdown;
