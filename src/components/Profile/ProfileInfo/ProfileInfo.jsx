import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <section className={style.user__info}>
            <img className={style.avatar} src={props.profile.photos.large} alt='Аватар пользователя'></img>
            <div className={style.discription}>
                <div className={style.top__discription}>
                    <h2 className={style.user__name}>{props.profile.fullName}</h2>
                    <p className={style.user__aboutMe}>{props.profile.aboutMe}</p>
                </div>
                <p><span className={style.label}>День рождения:</span> 10 сентября 1987г.</p>
                <p><span className={style.label}>Город:</span> Воронеж</p>
                <p><span className={style.label}>Контакты:</span></p>

                <ul className={style.contacts__list}>
                    {props.profile.contacts.facebook == null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
                        </li>}
                    {props.profile.contacts.website === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.website}>{props.profile.contacts.website}</a>
                        </li>}
                    {props.profile.contacts.vk === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.vk}>{props.profile.contacts.vk}</a>
                        </li>}
                    {props.profile.contacts.twitter === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
                        </li>}
                    {props.profile.contacts.instagram === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
                        </li>}
                    {props.profile.contacts.youtube === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a>
                        </li>}
                    {props.profile.contacts.github === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.github}>{props.profile.contacts.github}</a>
                        </li>}
                    {props.profile.contacts.mainLink === null
                        ? null
                        : <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a>
                        </li>}
                </ul>

                {props.profile.lookingForAJob == true
                    ? <p className={style.job}>
                        <span className={style.label}>Ищю работу: </span>{props.profile.lookingForAJobDescription}
                    </p>
                    : null}


            </div>
        </section>
    )
}


export default ProfileInfo;