import React from 'react';
import s from './Dialogs.module.css'
import DialogUser from "./DialogUser/DialogUser";
import Messages from "./Messages/Messages";

const Dialogs = () => {
    return (
        <div className={s.wrapper}>
            <DialogUser />
            <Messages />
        </div>
    )
}

export default Dialogs;