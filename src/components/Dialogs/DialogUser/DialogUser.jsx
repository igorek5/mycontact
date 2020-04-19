import React from 'react';
import s from './DialogUser.module.css'
import {NavLink} from "react-router-dom";

const DialogUser = () => {
    return (
            <div className={s.dialog__user}>
                <div className={s.item}>
                    <NavLink to='/dialogs/cristals' activeClassName={s.active} className={s.link}>
                        <p className={s.name}>Кристю Б.</p>
                        <img className={s.image}/>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/Jack' activeClassName={s.active} className={s.link}>
                        <p className={s.name}>Жека Ж.</p>
                        <img className={s.user}/>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/Oleg' activeClassName={s.active} className={s.link}>
                        <p className={s.name}>Олег К.</p>
                        <img className={s.user}/>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/ivan' activeClassName={s.active} className={s.link}>
                        <p className={s.name}>Иван П.</p>
                        <img className={s.user}/>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs/roma' activeClassName={s.active} className={s.link}>
                        <p className={s.name}>Роман З.</p>
                        <img className={s.user}/>
                    </NavLink>
                </div>
            </div>

    )
}

export default DialogUser;