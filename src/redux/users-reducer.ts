import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../components/utils/object-helpers";
import {UserDataType} from "../types/types";

const FOLLOW_USER = 'users/FOLLOW-USER';
const UNFOLLOW_USER = 'users/UNFOLLOW-USER';
const SET_USERS = 'users/SET-USERS';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_SUBSCRIBING_PROGRESS = 'users/TOGGLE-SUBSCRIBING-PROGRESS';

const initialState = {
    usersData: [] as Array<UserDataType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    subscribingInProgress: [] as Array<number> //array of users ids
}

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) { //переписать на один редьюсер, меняющий состояние
        case FOLLOW_USER:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: false})
            }

        case SET_USERS:
            return {
                ...state,
                usersData: [...action.usersData]
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_SUBSCRIBING_PROGRESS:
            return {
                ...state,
                subscribingInProgress: action.isFetching
                    ? [...state.subscribingInProgress, action.id]
                    : state.subscribingInProgress.filter(id => id !== action.id)
            }

        default:
            return state;
    }
}

type FollowSuccessActionType = {type: typeof FOLLOW_USER, userId: number};
type UnfollowSuccessActionType = {type: typeof UNFOLLOW_USER, userId: number};
type SetUsersActionType = {type: typeof SET_USERS, usersData: Array<UserDataType>};
type SetTotalUsersCountActionType = {type: typeof SET_TOTAL_USERS_COUNT, totalCount: number};
type SetCurrentPageActionType = {type: typeof SET_CURRENT_PAGE, pageNumber: number};
type ToggleIsFetchingActionType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean};
type ToggleSubscribingProgressActionType = {type: typeof TOGGLE_SUBSCRIBING_PROGRESS,isFetching: boolean,id: number};

//action creators
export const followSuccess = (userId: number): FollowSuccessActionType => ({type: FOLLOW_USER, userId: userId})
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({type: UNFOLLOW_USER, userId: userId})
export const setUsers = (users: Array<UserDataType>): SetUsersActionType => ({type: SET_USERS, usersData: users})
export const setTotalUsersCount = (usersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount: usersCount})
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleSubscribingProgress = (isFetching: boolean, id: number): ToggleSubscribingProgressActionType => ({type: TOGGLE_SUBSCRIBING_PROGRESS,isFetching,id})

//thunk creators
export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {

    dispatch(toggleSubscribingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(toggleSubscribingProgress(false, userId));
}

export const unfollowUser = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser, unfollowSuccess);
}

export const followUser = (userId: number) => async (dispatch: any) => {
    followUnfollowFlow(dispatch, userId, usersAPI.followUser, followSuccess);
}

export default usersReducer;