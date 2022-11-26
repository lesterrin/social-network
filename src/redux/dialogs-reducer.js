const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, newMessageText: text});

export const onMessageChangeActionCreator = (text) => ({type: CHANGE_MESSAGE_TEXT, newMessageText: text});

const initialState = {
    dialogsData : [
    {id: 1, name:'Лосяш', avatar: 'https://i.ytimg.com/vi/Uoh7Vp5g1nI/maxresdefault.jpg'},
    {id: 2, name:'Крош', avatar: 'https://tlum.ru/uploads/d6d38ebcf8548d81eb1f4dc3a54ed4d62f98301b8418d226ad19c2ccb440f412.jpeg'},
    {id: 3, name:'Ежик', avatar: 'https://i.ytimg.com/vi/0P2m-Bqaaq8/maxresdefault.jpg'},
    {id: 4, name:'Нюша', avatar: 'https://i.ytimg.com/vi/lK3xzYGej8w/maxresdefault.jpg'}
],

    messagesData : [
    {id: 1, message:'Эй'},
    {id: 2, message:'Привет'},
    {id: 3, message:'Как дела?'}
],

    newMessageText: ''
}

const dialogsReducer = (state= initialState,action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 5, message: action.newMessageText};
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;

        case CHANGE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;

        default:
            return state;
    }
}

export default dialogsReducer;
