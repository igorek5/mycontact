import React from 'react';
import s from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.dialog__user}>
                <UserDialog name='Кристю Б.' id='1'/>
                <UserDialog name='Жека Ж.' id='2'/>
                <UserDialog name='Роман З.' id='3'/>
                <UserDialog name='Олег К.' id='4'/>
                <UserDialog name='Иван П.' id='5'/>
                <UserDialog name='Павлик П.' id='7'/>
                <UserDialog name='Сапкин С.' id='8'/>
                <UserDialog name='Роман Б.' id='9'/>
                <UserDialog name='Зеленев С.' id='10'/>
                <UserDialog name='Андрей М.' id='12'/>
                <UserDialog name='Щёголев Д.' id='13'/>
                <UserDialog name='Андрей П.' id='14'/>
                <UserDialog name='Антоном З.' id='15'/>
                <UserDialog name='Черная Б.' id='16'/>
            </div>
            <div className={s.messages}>
                <Message text='Какие дела?' />
                <Message text='А у тебя?' />
                <Message text='А ты?' />
                <Message text='А я вам звезды дам!' />
            </div>
        </div>
    )
}

export default Dialogs;