import React from 'react';
import s from './ProfileFoto.module.css';

const FotoItem = (props) => {
    return (
        <div className={s.foto__item}>
            <img alt="Фото" src={props.src}/>
        </div>
    )
}

const ProfileFoto = (props) => {
    let foto = props.store.getState().profilePage.profileFoto

    let newFotoItem = foto.map(f => (<FotoItem src={f.foto} />));

        return (

        <section className={s.user__foto}>
            <h2 className='visually_hidden'>Фото пользователя</h2>

            { newFotoItem }



        </section>

    )
}

export default ProfileFoto;