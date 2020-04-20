import React from 'react';
import s from './ProfileFoto.module.css';

const FotoItem = (props) => {
    return (
        <div className={s.foto__item}>
            <img alt="Фото" src={props.src}></img>
        </div>
    )
}

const ProfileFoto = () => {
    return (

        <section className={s.user__foto}>
            <h2 className='visually_hidden'>Фото пользователя</h2>

            <FotoItem src='https://sun9-39.userapi.com/c847218/v847218443/c9d21/gSfLy5GU1Xw.jpg'/>
            <FotoItem src='https://sun9-45.userapi.com/c847218/v847218183/ccbe1/GypPjHucukA.jpg'/>
            <FotoItem src='https://sun9-44.userapi.com/c847218/v847218443/c9d46/IjWViAXT1C0.jpg'/>
            <FotoItem src='https://sun9-26.userapi.com/c847218/v847218443/c9d59/2UlhylPxhuU.jpg'/>

        </section>

    )
}

export default ProfileFoto;