import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const CHANGE_NEW_POST_TEXT = 'profile/CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_PROFILE_STATUS = 'profile/SET-PROFILE-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE-PHOTO-SUCCESS';
const UPDATE_PROFILE_DATA_SUCCESS = 'profile/UPDATE-PROFILE-DATA-SUCCESS';

const initialState = {
    postsData: [
        {id: 1, message: 'HelloWorld!', likes: 5},
        {id: 2, message: 'ImHere', likes: 3}
    ],
    newPostText: '',
    userProfile: null,
    profileStatus: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

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

        case DELETE_POST:
            return {
                ...state,
                postsData: [...state.postsData.filter(p => p.id !== action.postId)]
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };

        case SET_PROFILE_STATUS:
            return {
                ...state,
                profileStatus: action.profileStatus
            }

        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
            }

        case UPDATE_PROFILE_DATA_SUCCESS:
            const {lookingForAJob, lookingForAJobDescription, fullName, contacts} = action;
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    lookingForAJob,
                    lookingForAJobDescription,
                    fullName,
                    contacts: {...contacts}
                }
            }

        default:
            return state;
    }
}
//action creators
export const addPostActionCreator = (text) => ({type: ADD_POST, postMessage: text});
export const changeNewPostTextActionCreator = (text) => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, userProfile: profile});
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, profileStatus: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const updateProfileDataSuccess = () => ({type: UPDATE_PROFILE_DATA_SUCCESS});

//thunk creators
export const getUserProfile = (uid) => async (dispatch) => {
    const response = await profileAPI.getProfile(uid);
    dispatch(setUserProfile(response.data));
}

export const getProfileStatus = (uid) => async (dispatch) => {
    const response = await profileAPI.getProfileStatus(uid);

    if (response.data !== null) dispatch(setProfileStatus(response.data));
    else dispatch(setProfileStatus('Статус отсутствует'));
}

export const updateProfileStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateProfileStatus(status);
    if (response.data.resultCode === 0) dispatch(setProfileStatus(status));
}

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos));
}

export const updateProfileData = (profile) => async (dispatch,getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.updateProfileData(profile);
    if (response.data.resultCode === 0) dispatch(getUserProfile(userId));
}

export default profileReducer;
