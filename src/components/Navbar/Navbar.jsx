import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <aside className={s.nav_bar}>
            <nav>
                <ul className={s.nav}>
                    <li className={s.nav__item}>
                        <a href='/profile'>Profile</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href='/dialogs'>Messages</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href='/News'>News</a>
                    </li>
                    <li className={s.nav__item}>
                        <a href='/Music'>Music</a>
                    </li>
                    <li className={`${s.nav__item} ${s.nav__settings}`}>
                        <a href='/Settings'>Settings</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Navbar;