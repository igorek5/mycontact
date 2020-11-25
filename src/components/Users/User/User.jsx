import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/images/users_images.png";


const User = ({userId, name, photos, followed, followingInProgress, followThC, unfollowThC, status,  ...props}) => {

    return <div key={userId} className={style.item}>
        <div className={style.foto_wrapper}>
            <NavLink to={'/profile/' + userId} activeClassName={style.active}
                     className={style.foto_link}>
                <img className={style.foto_img} alt={name}
                     src={photos.small !== null ? photos.small : userPhoto}/>
            </NavLink>
        </div>

        <div className={style.friends_info}>
            <div className={style.info_wrapper}>
                <div className={style.left_column}>
                    <div className={style.name}>{name}</div>
                    {followed === true
                        ? <button disabled={followingInProgress.some(id => id === userId)}
                            // если в массиве хоть одна id полученная из массива равна id пользователя props.followingInProgress
                            //то тогда возвращает true т.е сработает disabled--------------------------
                            // В этом массиве если кто нибудь равен id пользователя то тогда метод some вернет true
                            // В противном случае false
                                  onClick={() => {
                                      unfollowThC(userId)
                                  }
                                  }
                                  className='button'>Отписаться</button>
                        : <button disabled={followingInProgress.some(id => id === userId)}
                                  onClick={() => {
                                      followThC(userId);
                                  }}
                                  className='button'>Добавить</button>}
                </div>
                <div className={style.right_column}>
                    <div className={style.country}>Country: {'u.location.country'}</div>
                    <div className={style.city}>Сity: {'u.location.city'}</div>
                </div>
            </div>
            <p className={style.status}>{status}</p>
        </div>
    </div>
};
export default User;

