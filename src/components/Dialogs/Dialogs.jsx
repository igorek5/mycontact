import React from 'react';
import s from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Кристю Б.'},
        {id: 2, name: 'Жека Ж.'},
        {id: 3, name: 'Роман З.'},
        {id: 4, name: 'Олек К.'},
        {id: 5, name: 'Иван П.'},
        {id: 6, name: 'Павлик П.'},
        {id: 7, name: 'Санек С.'},
        {id: 8, name: 'Роман Б.'},
        {id: 9, name: 'Зеленев С.'},
        {id: 10, name: 'Андрей М.'},
        {id: 11, name: 'Щёголев Д.'},
        {id: 12, name: 'Андрей П.'},
        {id: 13, name: 'Антон З.'},
        {id: 14, name: 'Черная Б.'},
        {id: 16, name: 'Кристю'}
    ]

    let MessageDate = [
        {id: 1, message: 'Какие дела?'},
        {id: 2, message: 'А у тебя?'},
        {id: 3, message: 'А ты че?'},
        {id: 4, message: 'А я вам звезды дам!'}
]

    let newDialogs = DialogsData.map(d => (<UserDialog id={d.id} name={d.name}/>));

    let newMessages = MessageDate.map(m => <Message text={m.message}/> );



    return (

        <div className={s.wrapper}>
            <div className={s.dialog__user}>

                { newDialogs }


            </div>
            <div className={s.messages}>
                { newMessages }
            </div>
        </div>
    )
}

export default Dialogs;