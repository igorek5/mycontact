import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {
    return (
        <aside className={style.nav_bar}>
            <nav>
                <ul className={style.nav}>
                    <li className={style.item}>
                        <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/News' activeClassName={style.active}>News</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/Music' activeClassName={style.active}>Music</NavLink>
                    </li>
                    <li className={style.item}>
                        <NavLink to='/users' activeClassName={style.active}>Find friends</NavLink>
                    </li>
                    <li className={`${style.item} ${style.settings}`}>
                        <NavLink to='/Settings' activeClassName={style.active}>Settings</NavLink>
                    </li>
                </ul>
            </nav>

            <FriendsContainer/>
        </aside>
    )
}

export default Navbar;