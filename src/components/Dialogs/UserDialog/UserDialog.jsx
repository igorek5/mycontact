import React from 'react';
import s from './UserDialog.module.css'
import {NavLink} from "react-router-dom";

const UserDialog = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active} className={s.link}>
                <p className={s.name}>{props.name}</p>
                <img className={s.image}/>
            </NavLink>
        </div>
    )
}

export default UserDialog;