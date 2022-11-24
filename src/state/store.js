const store = {
    state: {
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
    addPost(postMessage){
        let newPost = {
            id: 5,
            message: postMessage,
            likes: 0
        };
        this.state.profilePage.postsData.push(newPost);
        this.rerenderEntireTree(this);
        this.changeNewPostText('');
    },
    changeNewPostText(newPostText){
        this.state.profilePage.newPostText = newPostText;
        this.rerenderEntireTree(this);
    },
    sendMessage(newMessageText){
        let newMessage = {id: 5, message: newMessageText};
        this.state.dialogsPage.messagesData.push(newMessage);
        this.rerenderEntireTree(this);
        this.changeNewMessageText('');
    },
    changeNewMessageText(newMessageText){
        this.state.dialogsPage.newMessageText = newMessageText;
        this.rerenderEntireTree(this);
    },
    rerenderEntireTree(){
        console.log('state changed');
    },
    subscribe(observer){
        this.rerenderEntireTree = observer;
    }
}

export default store;
