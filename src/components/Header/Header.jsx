import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
           <div className={s.header__container}> 
                <div className={s.header__logo}>
                    <img className={s.image__logo} alt='Логотип' src='https://content.fortune.com/wp-content/uploads/2017/06/lgo-06-15-17-e-pbs.jpg'></img>
                    <p className={s.text__logo}>
                        <span>MyContact</span><br/>
                        <span className={s.hashtag}>#есть свой контакт</span>
                    </p>
                    
                </div>
               { props.isAuth ? <div><NavLink to={'/login'} className={s.login_link}>{props.userLogin}</NavLink>
                       <button onClick={props.logOut}>logOut</button></div>
                   : <NavLink to={'/login'} className={'button' + ' ' + s.btm}>Войти</NavLink>}
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