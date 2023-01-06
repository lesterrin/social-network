import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';

const initialState = {
    postsData : [
        {id: 1, message:'HelloWorld!', likes: 5},
        {id: 2, message:'ImHere', likes: 3}
    ],
    newPostText: '',
    userProfile: null,
    profileStatus: null
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
            };

        case SET_PROFILE_STATUS:
            return{
                ...state,
                profileStatus: action.profileStatus
            }

        default:
            return state;
    }
}
//action creators
export const addPostActionCreator = (text) => ({type: ADD_POST,postMessage: text});
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, profileStatus: status});

//thunk creators
export const getUserProfile = (uid) => {
    return (dispatch) => {
        profileAPI.getProfile(uid).then(response => {
           dispatch(setUserProfile(response.data));
        })
    }
}

export const getProfileStatus = (uid) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(uid).then(response => {
            if (response.data !== null) dispatch(setProfileStatus(response.data));
            else dispatch(setProfileStatus('Статус отсутствует'));
        })
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateProfileStatus(status).then(response => {
            if(response.data.resultCode === 0) dispatch(setProfileStatus(status));
        })
    }
}

export default profileReducer;
