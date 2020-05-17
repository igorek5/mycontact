import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/messages_reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;

    let addMesage = () => {
        props.store.dispatch( addMessageActionCreator() );
    }

    let newMessageText = (text) => {
        props.store.dispatch( updateNewMessageTextActionCreator(text) )
    }
    return <Dialogs messagesPage={state} addMesage={addMesage} newMessageText={newMessageText} />
}

export default DialogsContainer;