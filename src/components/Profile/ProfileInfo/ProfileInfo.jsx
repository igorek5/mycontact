import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import userPhoto from '../../../assets/images/users_images.png'
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <section className={style.user__info}>
            <img className={style.avatar} src={!props.profile.photos.large? userPhoto: props.profile.photos.large} alt='Аватар пользователя'></img>
            <div className={style.discription}>
                <div className={style.top__discription}>
                    <h2 className={style.user__name}>{props.profile.fullName}</h2>

                    { props.userStatus ? <ProfileStatusWithHook status={props.userStatus} updateUserStatus={props.updateUserStatus}/> : <Preloader/>}

                </div>
                <p><span className={style.label}>День рождения:</span> 10 сентября 1987г.</p>
                <p><span className={style.label}>Город:</span> Воронеж</p>
                <p><span className={style.label}>Контакты:</span></p>

                <ul className={style.contacts__list}>


                    {/*{props.profile.contacts.map(p => (<li className={style.contact__item}>
                            <a href={`https://` + p}>{p}</a>
                        </li>)

                    )}*/}

                    {(props.profile.contacts.facebook)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.facebook}>{props.profile.contacts.facebook}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.website)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.website}>{props.profile.contacts.website}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.vk)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.vk}>{props.profile.contacts.vk}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.twitter)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.twitter}>{props.profile.contacts.twitter}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.instagram)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.instagram}>{props.profile.contacts.instagram}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.youtube)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.youtube}>{props.profile.contacts.youtube}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.github)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.github}>{props.profile.contacts.github}</a>
                        </li>
                        : null}
                    {(props.profile.contacts.mainLink)
                        ? <li className={style.contact__item}>
                            <a href={`https://` + props.profile.contacts.mainLink}>{props.profile.contacts.mainLink}</a>
                        </li>
                        : null}
                </ul>

                {props.profile.lookingForAJob == true
                    ? <p className={style.job}>
                        <span className={style.label}>Ищю работу: </span>{props.profile.lookingForAJobDescription}
                    </p>
                    : null}

                {props.profile.aboutMe && <p><span className={style.label}>Обо мне: </span>{props.profile.aboutMe}</p>}


            </div>
        </section>
    )
}


export default ProfileInfo;