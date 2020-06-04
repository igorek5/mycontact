import React from "react";
import style from './Users.module.css'
import {NavLink} from "react-router-dom";

let users = [
    {
        id: 1,
        followed: true,
        fotoUrl: 'sun9-33.userapi.com/impf/c850624/v850624065/1cc4a6/4FqLRbPVcUQ.jpg?size=200x0&quality=90&sign=cd913e64b0690b53a6b8cb2875e60b37',
        userName: 'Кристина Разуваева',
        status: 'Цвет.. крю',
        location: {country: 'Russia', city: 'Победа'}
    },
    {
        id: 8,
        followed: false,
        fotoUrl: 'sun9-5.userapi.com/c850136/v850136391/3c5c/XdhWEyo0VLo.jpg',
        userName: 'Роман Баширов',
        status: 'Старый бодибилдер',
        location: {country: 'Russia', city: 'Воронеж'}

    },
    {
        id: 15,
        followed: true,
        fotoUrl: 'sun9-41.userapi.com/c857336/v857336445/11c1eb/rQkSn9DWkto.jpg',
        userName: 'Антон Салантий',
        status: 'фото монтаж на дому',
        location: {country: 'Russia', city: 'Воронеж'}

    },
    {
        id: 4,
        followed: true,
        fotoUrl: 'sun9-72.userapi.com/c624718/v624718738/3f55/_KShO4LDOos.jpg',
        userName: 'Олег К',
        status: 'Я терм...',
        location: {country: 'Russia', city: 'Tolyatti'}

    }];

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(users);
    }



    return (
        <div className={style.page_users}>
            <h2 className={style.title}>Friends</h2>

           {/* рисуем друзей, мапим*/}

            { props.users.map (u => (<div key={u.id} className={style.item}>
                <div className={style.foto_wrapper}>
                    <NavLink to={'/dialogs/' + u.id} activeClassName={style.active}
                             className={style.foto_link}>
                        <img className={style.foto_img} alt={u.userName}
                             src={'https://'+ u.fotoUrl}/>
                    </NavLink>
                </div>

                <div className={style.friends_info}>
                    <div className={style.info_wrapper}>
                        <div className={style.left_column}>
                            <div className={style.name}>{u.userName}</div>
                            {u.followed === true
                                ? <button onClick={() => props.unfollow(u.id)}
                                          className='button'>Отписаться</button>
                                : <button onClick={() => props.follow(u.id)}
                                          className='button'>Добавить</button>}
                        </div>
                        <div className={style.right_column}>
                            <div className={style.country}>Country: {u.location.country}</div>
                            <div className={style.city}>Сity: {u.location.city}</div>
                        </div>
                    </div>
                    <p className={style.status}>{u.status}</p>
                </div>
            </div>))

            }
        </div>
    )
}

export default Users;