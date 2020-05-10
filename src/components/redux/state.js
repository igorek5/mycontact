const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MASSAGE_TEXT = 'UPDATE_NEW_MASSAGE_TEXT';

const ADD_NEWS ='ADD_NEWS';
const UPDATE_NEW_NEWS_TEXT ='UPDATE_NEW_NEWS_TEXT';

let store = {
    _state: {
        messagesPage: {
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
            newMessageText: 'it-c'
        },
        profilePage: {
            post: [
                {id: 0, message: 'Привет ребзо, как вы?', like: 28},
                {id: 1, message: 'У меня отличная новость! Да!', like: 10},
                {id: 3, message: 'У меня отличная новость! Да!', like: 11},
                {id: 4, message: 'пробаба! Да!', like: 11}
            ],
            profileFoto: [
                {foto: 'https://sun9-39.userapi.com/c847218/v847218443/c9d21/gSfLy5GU1Xw.jpg'},
                {foto: 'https://sun9-45.userapi.com/c847218/v847218183/ccbe1/GypPjHucukA.jpg'},
                {foto: 'https://sun9-44.userapi.com/c847218/v847218443/c9d46/IjWViAXT1C0.jpg'},
                {foto: 'https://sun9-26.userapi.com/c847218/v847218443/c9d59/2UlhylPxhuU.jpg'}
            ],
            newPostText: ''
        },
        navbarPage: {
            friends: [
                {id: 8, src: 'https://sun9-5.userapi.com/c850136/v850136391/3c5c/XdhWEyo0VLo.jpg', name: 'Рома'},
                {id: 15, src: 'https://sun9-41.userapi.com/c857336/v857336445/11c1eb/rQkSn9DWkto.jpg', name: 'Антон'},
                {
                    id: 1,
                    src: 'https://sun9-33.userapi.com/impf/c850624/v850624065/1cc4a6/4FqLRbPVcUQ.jpg?size=200x0&quality=90&sign=cd913e64b0690b53a6b8cb2875e60b37',
                    name: 'Кристина'
                },
            ]
        },
        newsPage: {
            newsMessage: [
                {id: 1, newsMessage: 'вот это музон'},
                {id: 1, newsMessage: 'вот это музон'},
                {id: 1, newsMessage: 'вот это музон'}
            ],
            newNewsText: ''
        }
    },
    _callSubscriber() {
        console.log('привет');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {  // { type: 'ADD_POST' }

        //ProfilePage

        if (action.type === 'ADD_POST') {

            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                Like: 0
            }
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber();

        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();

            //MessagePage

        } else if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                id: 9,
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.message.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber();
        } else if (action.type === 'UPDATE_NEW_MASSAGE_TEXT') {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber();

        // NewsPage

        } else if (action.type === 'ADD_NEWS') {
            let newNews = {
                id: 2,
                newsMessage: this._state.newsPage.newNewsText
            }
            this._state.newsPage.newsMessage.push(newNews);
            this._state.newsPage.newNewsText = '';
            this._callSubscriber();
        } else  if (action.type === 'UPDATE_NEW_NEWS_TEXT') {
            this._state.newsPage.newNewsText = action.newText;
            this._callSubscriber()
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: newText }
}

export  const  addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export  const  updateNewMessageTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_MASSAGE_TEXT, newText: text });

export  const  addNewsActionCreator = () => ({ type: ADD_NEWS });
export  const  updateNewNewsTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_NEWS_TEXT, newText: text });


export default store;