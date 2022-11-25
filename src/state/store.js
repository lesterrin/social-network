const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_MESSAGE_TEXT = 'CHANGE-MESSAGE-TEXT';

const store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData : [
                {id: 1, message:'HelloWorld!', likes: 5},
                {id: 2, message:'ImHere', likes: 3}
            ],
            newPostText: ''
        }
    },
    _callSubscriber(){
        console.log('state changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        switch(action.type) {
            case 'ADD-POST':
                let newPost = {
                    id: 5,
                    message: action.postMessage,
                    likes: 0
                };
                this._state.profilePage.postsData.push(newPost);
                this._callSubscriber(this);
                this.dispatch({type:'CHANGE-NEW-POST-TEXT', newPostText: ''});
                break;

            case 'CHANGE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.newPostText;
                this._callSubscriber(this);
                break;

            case 'SEND-MESSAGE':
                let newMessage = {id: 5, message: action.newMessageText};
                this._state.dialogsPage.messagesData.push(newMessage);
                this._callSubscriber(this);
                this.dispatch({type:'CHANGE-MESSAGE-TEXT', newMessageText: ''});
                break;

            case 'CHANGE-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.newMessageText;
                this._callSubscriber(this);
                break;
        }
    }
}


export const addPostActionCreator = (text) => ({type: ADD_POST,postMessage: text});

export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});

export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, newMessageText: text});

export const onMessageChangeActionCreator = (text) => ({type: CHANGE_MESSAGE_TEXT, newMessageText: text});

export default store;
