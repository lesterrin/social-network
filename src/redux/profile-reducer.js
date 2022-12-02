const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
    postsData : [
        {id: 1, message:'HelloWorld!', likes: 5},
        {id: 2, message:'ImHere', likes: 3}
    ],
    newPostText: '',
    userProfile: null
};

const profileReducer = (state= initialState,action) => {

    switch(action.type) {

        case CHANGE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };

        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.postMessage,
                likes: 0
            };

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case SET_USER_PROFILE:
            return{
                ...state,
                userProfile: action.userProfile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: ADD_POST,postMessage: text});
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile});

export default profileReducer;
