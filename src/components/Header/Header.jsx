import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
           <div className={s.header__container}> 
                <div className={s.header__logo}>
                    <img className={s.image__logo} alt='Логотип' src='https://content.fortune.com/wp-content/uploads/2017/06/lgo-06-15-17-e-pbs.jpg'></img>
                    <p className={s.text__logo}>
                        <span>MyContact</span><br/>
                        <span className={s.hashtag}>#есть свой контакт</span>
                    </p>
                    
                </div>
                <button className={s.menu__btm}>menu</button>
            </div>

            <div className={s.nav__menu}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <a className={s.link} href='#c'>Profile</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link} href='#c'>Messages</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link} href='#c'>News</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link} href='#c'>Music</a>
                    </li>
                    <li className={s.item}>
                        <a className={s.link} href='#c'>Profile</a>
                    </li>
                    <li className={s.item} >
                        <a className={s.link} href='#c'>Settings</a>
                    </li>
                </ul>
            </div>
    </header>;
}

export default Header;