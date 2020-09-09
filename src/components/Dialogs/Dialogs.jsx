import React from 'react';
import s from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let newDialogs = props.messagesPage.dialogs.map(d => (<UserDialog id={d.id} name={d.name} key={d.id}/>));

    let newMessages = props.messagesPage.message.map(m => <Message text={m.message} key={m.id}/>);


    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChenge = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    if(!props.auth) return <Redirect to='/login'/>

    return (

        <div className={s.wrapper}>
            <div className={s.dialog__user}>

                {newDialogs}


            </div>
            <div className={s.messages}>
                {newMessages}
                <div>
                    <textarea onChange={onMessageChenge} value={props.messagesPage.newMessageText}></textarea>
                    <button onClick={addMessage} className='button'>new massage</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;