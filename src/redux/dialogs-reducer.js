const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, newMessageText: text});

export const onMessageChangeActionCreator = (text) => ({type: CHANGE_MESSAGE_TEXT, newMessageText: text});

const initialState = {
    dialogsData: [
        {id: 1, name: 'Лосяш', avatar: 'https://i.ytimg.com/vi/Uoh7Vp5g1nI/maxresdefault.jpg'},
        {id: 2, name: 'Крош',  avatar: 'https://tlum.ru/uploads/d6d38ebcf8548d81eb1f4dc3a54ed4d62f98301b8418d226ad19c2ccb440f412.jpeg'},
        {id: 3, name: 'Ежик', avatar: 'https://i.ytimg.com/vi/0P2m-Bqaaq8/maxresdefault.jpg'},
        {id: 4, name: 'Нюша', avatar: 'https://i.ytimg.com/vi/lK3xzYGej8w/maxresdefault.jpg'},
        {id: 5, name: 'Пин', avatar: 'https://multsforkids.ru/data/uploads/personaji/pin/pin-kartinki-1.jpg'},
        {id: 6, name: 'Карыч', avatar: 'https://sites.google.com/site/smesarikiclass/_/rsrc/1463455748373/home/kar-karyc/7.png?height=400&width=384'},
        {id: 7, name: 'Совунья', avatar: 'https://i.pinimg.com/originals/82/22/4f/82224f69c211273de2616dd6b69e8cc6.jpg'},
        {id: 8, name: 'Бараш', avatar: 'https://i.pinimg.com/474x/38/98/c2/3898c2d0e9611fa6b31e0eb96b5ef02b.jpg'}
    ],

    messagesData: [
        {id: 1, message: 'Эй'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Как дела?'}
    ],

    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {id: 5, message: action.newMessageText};

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };

        case CHANGE_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.newMessageText
            };

        default:
            return state;
    }
}

export default dialogsReducer;
