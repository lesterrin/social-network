import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";

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
    ] as Array<PostType>,
    newPostText: '' as string,
    userProfile: null as ProfileType || null,
    profileStatus: ""
};

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
                postsData: [...state.postsData, newPost] as Array<PostType>,
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
                userProfile: {...state.userProfile, photos: action.photos} as ProfileType
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
                } as ProfileType
            }

        default:
            return state;
    }
}

type AddPostActionType = { type: typeof ADD_POST, postMessage: string };
type ChangeNewPostTextActionType = { type: typeof CHANGE_NEW_POST_TEXT, newPostText: string };
type SetUserProfileActionType = { type: typeof SET_USER_PROFILE, userProfile: ProfileType };
type SetProfileStatusActionType = { type: typeof SET_PROFILE_STATUS, profileStatus: string };
type DeletePostActionType = { type: typeof DELETE_POST, postId: number };
type SavePhotoSuccessActionType = { type: typeof SAVE_PHOTO_SUCCESS, photos: PhotosType };
//type UpdateProfileDataActionType = { type: typeof UPDATE_PROFILE_DATA_SUCCESS };

//action creators
export const addPostActionCreator = (text: string): AddPostActionType => ({type: ADD_POST, postMessage: text});
export const changeNewPostTextActionCreator = (text: string): ChangeNewPostTextActionType => ({type: CHANGE_NEW_POST_TEXT, newPostText: text});
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, userProfile: profile});
export const setProfileStatus = (status: string): SetProfileStatusActionType => ({type: SET_PROFILE_STATUS, profileStatus: status});
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});
//export const updateProfileDataSuccess = (): UpdateProfileDataActionType => ({type: UPDATE_PROFILE_DATA_SUCCESS});

//thunk creators
export const getUserProfile = (uid) => async (dispatch: any) => {
    try {
        const response = await profileAPI.getProfile(uid);
        dispatch(setUserProfile(response.data));
    } catch (error) {
        console.log(error);
    }
}

export const getProfileStatus = (uid: number) => async (dispatch: any) => {
    const response = await profileAPI.getProfileStatus(uid);

    if (response.data !== null) dispatch(setProfileStatus(response.data));
    else dispatch(setProfileStatus('Статус отсутствует'));
}

export const updateProfileStatus = (status: string) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateProfileStatus(status);
        if (response.data.resultCode === 0) dispatch(setProfileStatus(status));
    } catch (error) {
        console.log(error);
    }
    //else return Promise.reject(response.data.messages[0]);
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    try {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos));
    } catch (error) {
        console.log(error);
    }
}

export const updateProfileData = (profile: ProfileType) => async (dispatch,getState)=> {
    try {
        const userId = getState().auth.userId;
        const response = await profileAPI.updateProfileData(profile);
        if (response.data.resultCode === 0) dispatch(getUserProfile(userId));
        else {
            return Promise.reject(response.data.messages[0]);
        }
    } catch (error) {
        console.log(error);
    }
}

export default profileReducer;
