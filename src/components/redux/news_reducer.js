const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT';

let initialState = {
    newsMessage: [
        {id: 1, newsMessage: 'вот это музон'},
        {id: 1, newsMessage: 'вот это музон'},
        {id: 1, newsMessage: 'вот это музон'}
    ],
    newNewsText: ''
}

const newsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEWS: {
            let newNews = {
                id: 2,
                newsMessage: state.newNewsText
            }
            let stateCopy = {...state};
            stateCopy.newsMessage = [...state.newsMessage];
            stateCopy.newsMessage.push(newNews);
            stateCopy.newNewsText = '';
            return stateCopy;
        }
        case UPDATE_NEW_NEWS_TEXT: {
            let stateCopy = {...state};
            stateCopy.newNewsText = action.newText;
            return stateCopy;
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