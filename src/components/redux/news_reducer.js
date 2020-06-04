const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT';

let initialState = {
    newsMessage: [
        {id: 1, newsMessage: 'вот это музон'},
        {id: 2, newsMessage: 'вот это музон'},
        {id: 3, newsMessage: 'вот это музон'}
    ],
    newNewsText: ''
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                newsMessage: [...state.newsMessage, {id: 4, newsMessage: state.newNewsText} ],
                newNewsText: ''
            }

        case UPDATE_NEW_NEWS_TEXT:
            return {
                ...state,
                newNewsText: action.newText
            }

        default:
            return state;
    }
    return state;
}

export  const  addNewsActionCreator = () => ({ type: ADD_NEWS });
export  const  updateNewNewsTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_NEWS_TEXT, newText: text });

export default newsReducer;