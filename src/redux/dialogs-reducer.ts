const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'dialogs/CHANGE-MESSAGE-TEXT';

type DialogType = {
    id: number,
    name: string,
    avatar: string
}

type MessageType = {
    id: number,
    message: string
}

const initialState = {
    dialogsData: [
        {id: 1, name: 'Лосяш', avatar: 'https://i.ytimg.com/vi/Uoh7Vp5g1nI/maxresdefault.jpg'},
        {id: 2, name: 'Ежик', avatar: 'https://i.ytimg.com/vi/0P2m-Bqaaq8/maxresdefault.jpg'},
        {id: 3, name: 'Нюша', avatar: 'https://i.ytimg.com/vi/lK3xzYGej8w/maxresdefault.jpg'},
        {id: 4, name: 'Пин', avatar: 'https://multsforkids.ru/data/uploads/personaji/pin/pin-kartinki-1.jpg'},
        {id: 5, name: 'Бараш', avatar: 'https://i.pinimg.com/474x/38/98/c2/3898c2d0e9611fa6b31e0eb96b5ef02b.jpg'}
    ] as Array<DialogType>,

    messagesData: [
        {id: 1, message: 'Эй'},
        {id: 2, message: 'Привет'},
        {id: 3, message: 'Как дела?'}
    ] as Array<MessageType>,

    newMessageText: '' as string
}

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {

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

type SendMessageActionType = { type: typeof SEND_MESSAGE, newMessageText: string }
type OnMessageChangeActionType = {type: typeof CHANGE_MESSAGE_TEXT, newMessageText: string}

export const sendMessageActionCreator = (newMessageText: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageText});

export const onMessageChangeActionCreator = (newMessageText: string): OnMessageChangeActionType => ({type: CHANGE_MESSAGE_TEXT, newMessageText});

export default dialogsReducer;
