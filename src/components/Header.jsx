import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <div className="container">
            <div className={s.header__logo}>
                <img className={s.image__logo} alt='Логотип' src='https://content.fortune.com/wp-content/uploads/2017/06/lgo-06-15-17-e-pbs.jpg'></img>
                <p className={s.text__logo}>
                    <span>MyContact</span><br/>
                    #есть свой контакт
                </p>
            </div>
        </div>
    </header>;
}

export default Header;