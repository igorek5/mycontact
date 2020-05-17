import React from 'react';
import s from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/messages_reducer";



const Dialogs = (props) => {

    let newDialogs = props.messagesPage.dialogs.map(d => (<UserDialog id={d.id} name={d.name}/>));

    let newMessages = props.messagesPage.message.map(m => <Message text={m.message}/>);


    let addMesage = () => {
        props.addMesage();
    }

    let onMessageChenge = (e) => {
        let text = e.target.value;
        props.newMessageText(text);
    }
    return (

        <div className={s.wrapper}>
            <div className={s.dialog__user}>

                {newDialogs}


            </div>
            <div className={s.messages}>
                {newMessages}
                <div>
                    <textarea onChange={onMessageChenge} value={props.messagesPage.newMessageText}></textarea>
                    <button onClick={addMesage} className='button'>new massage</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;