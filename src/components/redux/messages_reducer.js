const ADD_MESSAGE = 'myContact/messages/ADD_MESSAGE';
const DELETE_MESSAGE = 'myContact/messages/DELETE_MESSAGE';

let initialState = {
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
    ]
    };


const messagesReducer = (state= initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                message: [...state.message, {id: 9, message: action.text}],
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                message: state.message.filter(m => m.id != action.idMessage)
            };

        default:
            return state;

    }
    return state;
}

export  const  addMessageActionCreator = (text) =>
    ({ type: ADD_MESSAGE, text });

export const deleteMessageAC = (idMessage) =>
    ({type: DELETE_MESSAGE, idMessage});

export default messagesReducer;