import React from 'react';
import style from './Users.module.css'
import Paginator from "../common/FormsControls/Paginator/Paginator";
import User from "./User/User";

const Users = (props) => {
    return (
        <div className={style.page_users}>

            <h2 className={style.title}>Friends</h2>

            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       pageCurrent={props.pageCurrent}
                       onPageChange={props.onPageChange}
            />

            {props.users.map(u => (<User key={u.id}
                                         userId={u.id}
                                         name={u.name}
                                         photos={u.photos}
                                         followed={u.followed}
                                         status={u.status}
                                         followingInProgress={props.followingInProgress}
                                         unfollowThC={props.unfollowThC}
                                         followThC={props.followThC}

            />))
            }
        </div>
    )
};


export default Users;