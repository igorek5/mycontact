const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialStete = {
        dialogs: [
            {id: 1, name: 'Кристю Б.'},
            {id: 2, name: 'Жека Ж.'},
            {id: 3, name: 'Роман З.'},
            {id: 4, name: 'Олек К.'},
            {id: 5, name: 'Иван П.'},
            {id: 6, name: 'Павлик П.'},
            {id: 7, name: 'Санек С.'},
            {id: 8, name: 'Роман Б.'},
            {id: 9, name: 'Зеленев С.'},
            {id: 10, name: 'Андрей М.'},
            {id: 11, name: 'Щёголев Д.'},
            {id: 12, name: 'Андрей П.'},
            {id: 13, name: 'Антон З.'},
            {id: 14, name: 'Черная Б.'},
            {id: 15, name: 'Салантий А.'}
        ],
        message: [
        {id: 1, message: 'Какие дела?'},
        {id: 2, message: 'А у тебя?'},
        {id: 3, message: 'А ты че?'},
        {id: 4, message: 'А я вам звезды дам!'},
        {id: 5, message: 'А я вам звезды дам!'},
        {id: 6, message: 'Проверка на вшивость!'},
    ],
        newMessageText: 'it-cth'
    }


const messagesReducer = (state= initialStete, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 9,
                message: state.newMessageText,
            }
            let stateCopy = {...state};
            stateCopy.message = [...state.message];
            stateCopy.message.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy
        }
        default:
            return state;

    }
    return state;
}

export  const  addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export  const  updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });

export default messagesReducer;