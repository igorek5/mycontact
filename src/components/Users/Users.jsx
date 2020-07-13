import React from "react";
import style from './Users.module.css'
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import userPhoto from '../../assets/images/users_images.png'


class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageСurrent}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
            this.props.setTotalUsersCount(respons.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setPageCurrent(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(respons => {
            this.props.setUsers(respons.data.items);
        });
    }

    render() {//метод рендер вернет на jsx

        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize) //подсчитываем кол во страниц, округляем до целого числа

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        };

        return (
            <div className={style.page_users}>
                <div className={style.pagination_wrapper}>
                    <h2 className={style.title}>Friends</h2>
                    <ul className={style.pagination_list}>
                        {pages.map(p => {
                               return <li className={style.pagination_item}><a onClick={ () => {this.onPageChange(p)} } className={this.props.pageСurrent === p && style.active}>{p}</a></li>
                            }
                        )}
                        {/*<li className={style.pagination_item}><a href="#" className={style.active}>1</a></li>
                        <li className={style.pagination_item}><a href="#">2</a></li>
                        <li className={style.pagination_item}><a href="#">3</a></li>
                        <li className={style.pagination_item}><a href="#">4</a></li>*/}
                    </ul>
                </div>
                {/* рисуем друзей, мапим*/}

                {this.props.users.map(u => (<div key={u.id}
                                                 className={style.item}> {/*props теперь часть обьекта в классовой компоненте this.*/}
                    <div className={style.foto_wrapper}>
                        <NavLink to={'/dialogs/' + u.id} activeClassName={style.active}
                                 className={style.foto_link}>
                            <img className={style.foto_img} alt={u.name}
                                 src={u.photos.smail != null ? u.photos.smail : userPhoto}/>
                        </NavLink>
                    </div>

                    <div className={style.friends_info}>
                        <div className={style.info_wrapper}>
                            <div className={style.left_column}>
                                <div className={style.name}>{u.name}</div>
                                {u.followed === true
                                    ? <button onClick={() => this.props.unfollow(u.id)}
                                              className='button'>Отписаться</button>
                                    : <button onClick={() => this.props.follow(u.id)}
                                              className='button'>Добавить</button>}
                            </div>
                            <div className={style.right_column}>
                                <div className={style.country}>Country: {"u.location.country"}</div>
                                <div className={style.city}>Сity: {"u.location.city"}</div>
                            </div>
                        </div>
                        <p className={style.status}>{u.status}</p>
                    </div>
                </div>))

                }
            </div>
        )
    }
}


export default Users;