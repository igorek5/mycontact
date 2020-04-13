import React from 'react';

const Navbar = () => {
    return <aside className='nav-bar'>
        <nav>
            <ul className='main-nav'>
                <li className='main-nav__item'>
                    <a href='#c'>Profile</a>
                </li>
                <li className='main-nav__item'>
                    <a href='#c'>Messages</a>
                </li>
                <li className='main-nav__item'>
                    <a href='#c'>News</a>
                </li>
                <li className='main-nav__item'>
                    <a href='#c'>Music</a>
                </li>
                <li className='main-nav__item'>
                    <a href='#c'>Profile</a>
                </li>
                <li className='main-nav__item'>
                    <a href='#c'>Settings</a>
                </li>
            </ul>
        </nav>
    </aside>
}

export default Navbar;