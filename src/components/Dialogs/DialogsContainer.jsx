import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../redux/messages_reducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
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
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);




/*
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);


export default DialogsContainer;*/
