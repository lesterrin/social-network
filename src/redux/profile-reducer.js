const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

export const addPostActionCreator = (text) => ({type: ADD_POST,postMessage: text});

export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});

const initialState = {
    postsData : [
        {id: 1, message:'HelloWorld!', likes: 5},
        {id: 2, message:'ImHere', likes: 3}
    ],
    newPostText: ''
};

const profileReducer = (state= initialState,action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.postMessage,
                likes: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;

        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;

        default:
            return state;
    }
}

export default profileReducer;
