import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return <aside className={s.nav_bar}>
        <nav>
            <ul className={s.nav}>
                <li className={s.nav__item}>
                    <a href='#c'>Profile</a>
                </li>
                <li className={s.nav__item}>
                    <a href='#c'>Messages</a>
                </li>
                <li className={s.nav__item}>
                    <a href='#c'>News</a>
                </li>
                <li className={s.nav__item}>
                    <a href='#c'>Music</a>
                </li>
                <li className={s.nav__item}>
                    <a href='#c'>Profile</a>
                </li>
                <li className={`${s.nav__item} ${s.nav__settings}`} >
                    <a href='#c'>Settings</a>
                </li>
            </ul>
        </nav>
    </aside>
}

export default Navbar;