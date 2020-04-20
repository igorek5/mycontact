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


    return (

        <div className={s.wrapper}>
            <div className={s.dialog__user}>
                <UserDialog name={DialogsData[0].name} id={DialogsData[1].id}/>
                <UserDialog name={DialogsData[1].name} id={DialogsData[2].id}/>
                <UserDialog name={DialogsData[3].name} id={DialogsData[3].id}/>
                <UserDialog name={DialogsData[4].name} id={DialogsData[4].id}/>
                <UserDialog name={DialogsData[5].name} id={DialogsData[5].id}/>
                <UserDialog name={DialogsData[6].name} id={DialogsData[6].id}/>
                <UserDialog name={DialogsData[7].name} id={DialogsData[7].id}/>
                <UserDialog name={DialogsData[8].name} id={DialogsData[8].id}/>
                <UserDialog name={DialogsData[9].name} id={DialogsData[9].id}/>
                <UserDialog name={DialogsData[10].name} id={DialogsData[10].id}/>
                <UserDialog name={DialogsData[11].name} id={DialogsData[11].id}/>
                <UserDialog name={DialogsData[12].name} id={DialogsData[12].id}/>
                <UserDialog name={DialogsData[13].name} id={DialogsData[13].id}/>
                <UserDialog name={DialogsData[14].name} id={DialogsData[14].id}/>
            </div>
            <div className={s.messages}>
                <Message text={MessageDate[0].message} />
                <Message text={MessageDate[1].message} />
                <Message text={MessageDate[2].message} />
                <Message text={MessageDate[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;