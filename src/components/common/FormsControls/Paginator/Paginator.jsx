import React from 'react';
import style from './Paginator.module.css'

const Paginator = ({totalCount, pageSize, pageCurrent, onPageChange, ...props}) => {
    let pageCount = Math.ceil(totalCount / pageSize); //подсчитываем кол во страниц, округляем до целого числа

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
            <div className={style.pagination_wrapper}>

                <ul className={style.pagination_list}>
                    {pages.map(p => {
                            return <li key={p} className={style.pagination_item}>
                                <a className={pageCurrent === p ? style.active : null} onClick={() => {
                                    onPageChange(p)
                                }}>{p}</a></li>
                        }
                    )}
                </ul>
            </div>

    )
};

export default Paginator;