import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        console.log('redux changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this);
    }
}

export default store;
