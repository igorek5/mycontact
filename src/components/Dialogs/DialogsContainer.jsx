import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/messages_reducer";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        auth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch( addMessageActionCreator() );
        },
        updateNewMessageText: (text) => {
            dispatch( updateNewMessageTextActionCreator(text) );
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);


export default DialogsContainer;