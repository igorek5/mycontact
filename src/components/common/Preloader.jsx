import React from 'react';
import style from "./Preloader.module.css";
import preloader from "../../assets/images/metaballs.gif";

const Preloader = () => {
    return (
        <>
        <div className={style.preloader__wrapper}><img className={style.preloader} src={preloader}/></div>
            <div className={style.overlay}></div>
        </>
    )
}

export default Preloader;