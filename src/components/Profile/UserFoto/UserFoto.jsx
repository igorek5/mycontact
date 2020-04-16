import React from 'react';
import s from './UserFoto.module.css';

const UserFoto = () => {
    return (

        <section className={s.user__foto}>
            <h2 className='visually_hidden'>Фото пользователя</h2>

            <div className={s.user__foto__item}>
                <img alt="Фото" src="https://sun9-39.userapi.com/c847218/v847218443/c9d21/gSfLy5GU1Xw.jpg"></img>
            </div>

            <div className={s.user__foto__item}>
                <img alt="Фото" src="https://sun9-45.userapi.com/c847218/v847218183/ccbe1/GypPjHucukA.jpg"></img>
            </div>

            <div className={s.user__foto__item}>
                <img alt="Фото" src="https://sun9-44.userapi.com/c847218/v847218443/c9d46/IjWViAXT1C0.jpg"></img>
            </div>

            <div className={s.user__foto__item}>
                <img alt="Фото" src="https://sun9-26.userapi.com/c847218/v847218443/c9d59/2UlhylPxhuU.jpg"></img>
            </div>

        </section>

    )
}

export default UserFoto;