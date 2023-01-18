import React, { useEffect, useState } from "react";
import style from "../styles/Dropdown.module.css";
import Arrow from "../assets/arrowDropdown.svg";

function Dropdown() {
    const [data, setData] = useState([]);
    const [dropdownValue, setDropdownValue] = useState(true);
    const [classOpen, setClassOpen] = useState(style.arrowOpen);
    const [classClose, setClassClose] = useState(style.arrowClose);

    const handleStrip = (id) => {
        console.log(id, "id");
        // console.log(getClassNameAttribute);
        // e.stopPropagation();
        // e.preventDefault();
        setDropdownValue(!dropdownValue);
        console.log(!dropdownValue);
        // let classOpen = style.arrowOpen;
        // let classClose = style.arrowClose;
    };

    // function setClassName(id) {
    //     if (id) {
    //     }
    // }

    const getData = () => {
        fetch("../infos.json")
            .then(function (res) {
                return res.json();
            })
            .then(function (myJson) {
                setData(myJson);
            })
            .catch((err) => {
                console.log(err);
                console.log("il y a une erreur dropdown");
            });
    };
    // let testValue = false;

    useEffect(() => {
        getData();
    }, []);

    return (
        <section>
            {data.map((el) => (
                <div
                    className={style.dropdown}
                    key={el.id}
                    // onClick={handleStrip}
                    onClick={() => {
                        console.log(el.id);
                        handleStrip(el.id);
                        // getClassNameAttribute;
                    }}
                >
                    <div className={style.strip} key={el.id + 1}>
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
}
export default Dropdown;
