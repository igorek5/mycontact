import React from 'react';
import profileReducer, {addPostActionCreator, deletePostAC} from "./profile_reducer";

let state = {
    post: [
        {id: 0, message: 'Привет ребзо, как вы?', like: 28},
        {id: 1, message: 'У меня отличная новость! Да!', like: 10},
        {id: 3, message: 'У меня отличная новость! Да!', like: 11},
        {id: 4, message: 'пробаба! Да!', like: 11}
    ]
};


test('lendth of posts shold be incremented', () => {
    let action = addPostActionCreator('hello');

    let newState = profileReducer(state, action);

    expect (newState.post.length).toBe(5);
});

test('the length of posts should be reduced', () => {
    let action = deletePostAC(1);

    let newState = profileReducer(state, action);

    expect (newState.post.length).toBe(3);
});

test('the length of posts should not change', () => {
    let action = deletePostAC(100000);

    let newState = profileReducer(state, action);

    expect (newState.post.length).toBe(4);
});


