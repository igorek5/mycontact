import React from 'react';
import style from './Users.module.css'
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/images/users_images.png'
import {userAPI} from "../api/api";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalCount / props.pageSize); //подсчитываем кол во страниц, округляем до целого числа

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    ;
    return (
        <div className={style.page_users}>
            <div className={style.pagination_wrapper}>
                <h2 className={style.title}>Friends</h2>
                <ul className={style.pagination_list}>
                    {pages.map(p => {
                            return <li key={p} className={style.pagination_item}>
                                <a className={props.pageСurrent === p ? style.active : null} onClick={() => {
                                    props.onPageChange(p)
                                }}>{p}</a></li>
                        }
                    )}
                </ul>
            </div>


            {/* рисуем друзей, мапим*/}

            {props.users.map(u => (<div key={u.id}
                                        className={style.item}> {/*props теперь часть обьекта в классовой компоненте this.*/}
                <div className={style.foto_wrapper}>
                    <NavLink to={'/profile/' + u.id} activeClassName={style.active}
                             className={style.foto_link}>
                        <img className={style.foto_img} alt={u.name}
                             src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>

                <div className={style.friends_info}>
                    <div className={style.info_wrapper}>
                        <div className={style.left_column}>
                            <div className={style.name}>{u.name}</div>
                            {u.followed === true
                                ? <button disabled={props.followingInProgress.some(id => id == u.id)}
                                    // если в массиве хоть одна id полученная из массива равна id пользователя props.followingInProgress
                                    //то тогда возвращает true т.е сработает disabled--------------------------
                                    // В этом массиве если кто нибудь равен id пользователя то тогда метод some вернет true
                                    // В противном случае false
                                          onClick={() => {
                                              props.unfollowThC(u.id)
                                              /*props.toggleIsFollowingProgress(true, u.id);
                                              userAPI.unfollow(u.id).then(data => {
                                                  if (data.resultCode == 0) {
                                                      props.unfollow(u.id)
                                                  }
                                                  props.toggleIsFollowingProgress(false, u.id);
                                              });*/
                                          }
                                          }
                                          className='button'>Отписаться</button>
                                : <button disabled={props.followingInProgress.some(id => id == u.id)}
                                          onClick={() => {
                                              props.followThC(u.id);
                                              /*props.toggleIsFollowingProgress(true, u.id);
                                              userAPI.follow(u.id).then(data => {
                                                  if (data.resultCode == 0) {
                                                      props.follow(u.id)
                                                  }
                                                  props.toggleIsFollowingProgress(false, u.id);
                                              });*/
                                          }}
                                          className='button'>Добавить</button>}
                        </div>
                        <div className={style.right_column}>
                            <div className={style.country}>Country: {'u.location.country'}</div>
                            <div className={style.city}>Сity: {'u.location.city'}</div>
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