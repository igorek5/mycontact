import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
    return (
        <aside className={s.nav_bar}>
            <nav>
                <ul className={s.nav}>
                    <li className={s.item}>
                        <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/News' activeClassName={s.active}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
                    </li>
                    <li className={`${s.item} ${s.settings}`}>
                        <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>

            <Friends friends={props.friends}/>
        </aside>
    )
}

export default Navbar;