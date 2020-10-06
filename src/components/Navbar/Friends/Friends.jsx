import React from 'react';
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let friend = props.friends
        .map(f => (<NavLink to={'/dialogs/' + f.id} key={f.id}>
            <img className={s.image} alt='Друзья' src={f.src}/>
        </NavLink>))

    return (

        <div className={s.friends}>

            <NavLink to='/dialogs'><p className={s.title}>Друзья</p></NavLink>

            <div className={s.friends__list}>

                {friend}


                <div className={s.decor}></div>

            </div>
        </div>
    )
}

export default Friends;