import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../components/utils/object-helpers";
import {UserDataType} from "../types/types";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const initialState = {
    usersData: [] as Array<UserDataType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number,
    isFetching: false as boolean,
    subscribingInProgress: [] as Array<number> //массив id пользователей
}

type initialStateType = typeof initialState;

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {

    switch (action.type) { //переписать на один редьюсер, меняющий состояние
        case 'FOLLOW_USER':
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: true})
            }

        case 'UNFOLLOW_USER':
            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, 'id', {followed: false})
            }

        case 'SET_USERS':
            return {
                ...state,
                usersData: [...action.usersData]
            }

        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        case 'TOGGLE_SUBSCRIBING_PROGRESS':
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

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    followSuccess: (userId: number) => ({type: 'FOLLOW_USER', userId: userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW_USER', userId: userId} as const),
    setUsers: (users: Array<UserDataType>) => ({type: 'SET_USERS', usersData: users} as const),
    setTotalUsersCount: (usersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount: usersCount} as const),
    setCurrentPage: (pageNumber: number) => ({type: 'SET_CURRENT_PAGE', pageNumber} as const),
    toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
    toggleSubscribingProgress: (isFetching: boolean, id: number) => ({type: 'TOGGLE_SUBSCRIBING_PROGRESS', isFetching, id} as const)
}

//thunk creators

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requestUsers = (currentPage: number,
                             pageSize: number): ThunkType =>
    async (dispatch) => {
        dispatch(actions.toggleIsFetching(true));

        let data = await usersAPI.getUsers(currentPage, pageSize)

        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }

const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {

    dispatch(actions.toggleSubscribingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(actions.toggleSubscribingProgress(false, userId));
}

export const unfollowUser = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser, actions.unfollowSuccess);
}

export const followUser = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.followUser, actions.followSuccess);
}

export default usersReducer;