import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <section className={s.user__info}>
            <h2 className='visually_hidden'>Информация о пользователе</h2>
            <img className={s.avatar} src='https://sun9-39.userapi.com/impf/c846324/v846324431/be6f1/ba4wGLkudOg.jpg?size=200x0&quality=90&sign=bc933f6e11cf8d3b786333cc6c51c91d' alt='Аватар пользователя'></img>
            <div className={s.discription}>
                <p /*className={s.user__name}*/>Игорь Баутин</p>
                <p /*className={s.user__date}*/>День рождения: 10 сентября 1987г.</p>
                <p /*className={s.user__city}*/>Город: Воронеж</p>
            </div>
        </section>
    )
}

export default ProfileInfo;