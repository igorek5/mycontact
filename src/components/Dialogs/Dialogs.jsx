import React from 'react';
import s from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newDialogs = props.dialogs.map(d => (<UserDialog id={d.id} name={d.name}/>));

    let newMessages = props.messagesPage.message.map(m => <Message text={m.message}/>);

    let newMessagElement = React.createRef();

    let addMesage = () => {
        props.dispatch( {type: 'ADD_MESSAGE'} );
    }

    let onMessageChenge = () => {
        let text = newMessagElement.current.value;
        props.dispatch( {type: 'UPDATE_NEW_MASSAGE_TEXT', newText: text} )
    }
    return (

        <div className={s.wrapper}>
            <div className={s.dialog__user}>

                {newDialogs}


            </div>
            <div className={s.messages}>
                {newMessages}
                <div>
                    <textarea ref={newMessagElement} onChange={onMessageChenge} value={props.messagesPage.newMessageText}></textarea>
                    <button onClick={addMesage} className='button'>new massage</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;