import React from 'react';
import messagesReducer, {addMessageActionCreator, deleteMessageAC} from "./messages_reducer";

let state = {
    message: [
        {id: 1, message: 'Какие дела?'},
        {id: 2, message: 'А у тебя?'},
        {id: 3, message: 'А ты че?'},
        {id: 4, message: 'А я вам звезды дам!'},
        {id: 5, message: 'А я вам звезды дам!'},
        {id: 6, message: 'Проверка на вшивость!'},
    ]
};


test('the length of messages should be increased', () => {
    let action = addMessageActionCreator('Hello react');

    let newState = messagesReducer(state, action);

    expect(newState.message.length).toBe(7);
});

test('the length of messages should be shortened', () => {
    let action = deleteMessageAC(3);

    let newState = messagesReducer(state, action);

    expect(newState.message.length).toBe(5);
});

test('the length of posts should not change', () => {
    let action = deleteMessageAC(3000000);

    let newState = messagesReducer(state, action);

    expect(newState.message.length).toBe(6);
});


