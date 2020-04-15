import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <main>

        <h1 className='visually_hidden'>My contact</h1>
        <section className={s.user__info}>
            <h2 className='visually_hidden'>Информация о пользователе</h2>
            <img className={s.avatar} src='https://sun9-39.userapi.com/impf/c846324/v846324431/be6f1/ba4wGLkudOg.jpg?size=200x0&quality=90&sign=bc933f6e11cf8d3b786333cc6c51c91d' alt='Аватар пользователя' className={s.avatar}></img>
            <div className={s.discription}>
                <p /*className={s.user__name}*/>Игорь Баутин</p>
                <p /*className={s.user__date}*/>День рождения: 10 сентября 1987г.</p>
                <p /*className={s.user__city}*/>Город: Воронеж</p>
            </div>
        </section>

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


        <section className={s.posts}>
            <h2 className={s.post__title}>My posts</h2>
            <form className={s.post__form} method='post' action='#'>
                <textarea className={s.post__input} name='text' rows='3' placeholder='Что у вас нового?'></textarea>
                <button className={s.posts__button} type='submit'>Send</button>
            </form>
        
            <div className={s.post__user}>
                <div className={s.post__avatar}></div>
                <p className={s.post__text}>У меня отличная новость!</p>
            </div>

            <div className={s.post__user}>
                <div className={s.post__avatar}></div>
                <p className={s.post__text}> меня отличная новость!</p>
            </div>
        </section>
    </main>
}

export default Profile;