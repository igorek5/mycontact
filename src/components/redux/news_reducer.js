const ADD_NEWS = 'ADD_NEWS';
const UPDATE_NEW_NEWS_TEXT = 'UPDATE_NEW_NEWS_TEXT';


const newsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEWS:
            let newNews = {
                id: 2,
                newsMessage: state.newNewsText
            }
            state.newsMessage.push(newNews);
            state.newNewsText = '';
            return state;

        case UPDATE_NEW_NEWS_TEXT:
            state.newNewsText = action.newText;
            return state;
        default:
            return state;
    }
    return state;
}

export  const  addNewsActionCreator = () => ({ type: ADD_NEWS });
export  const  updateNewNewsTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_NEWS_TEXT, newText: text });

export default newsReducer;