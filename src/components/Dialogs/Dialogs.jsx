import React from 'react';
import s from './Dialogs.module.css'
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newDialogs = props.dialogs.map(d => (<UserDialog id={d.id} name={d.name}/>));

    let newMessages = props.message.map(m => <Message text={m.message}/> );



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