import React from "react";
import { useFetch } from "./hooks/UseFetch";

import Drop from "./Drop";
import style from "../styles/Dropdown.module.css";

function Dropdown({ dataUrl, dataID }) {
    // console.log(dataUrl);
    // console.log(dataID);
    const { data } = useFetch(dataUrl);

    if (dataUrl === "../infos.json") {
        return (
            <section>
                {data.map((el) => {
                    return (
                        <Drop
                            key={el.id + Math.random()}
                            title={el.title}
                            description={el.description}
                            page="about"
                            id={dataID}
                        />
                    );
                })}
            </section>
        );
    } else {
        return (
            <section>
                {data.map((el) => {
                    if (el.id === dataID) {
                        // iteration pour afficher les equipements => tools
                        const toolsIteration = el.equipments.map((tools) => (
                            <li
                                key={el.id + Math.random()}
                                className={style.listTools}
                            >
                                {tools}
                            </li>
                        ));
                        return (
                            <Drop
                                key={el.id + Math.random()}
                                description={el.description}
                                page="housing"
                                tool={toolsIteration}
                                id={el.id}
                            />
                        );
                    } else return null;
                })}
            </section>
        );
    }
}
export default Dropdown;
