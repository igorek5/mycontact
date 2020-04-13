import React from 'react';

const Header = () => {
    return <header className='main-header'>
        <div className="container">
            <div className='header__logo'>
                <img className='image__logo' alt='Логотип' src='https://content.fortune.com/wp-content/uploads/2017/06/lgo-06-15-17-e-pbs.jpg'></img>
                <p className='text__logo'>
                    <span>MyContact</span><br/>
                    #есть свой контакт
                </p>
            </div>
        </div>
    </header>;
}

export default Header;