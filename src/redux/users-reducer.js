import {usersAPI} from "../api/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_SUBSCRIBING_PROGRESS = 'TOGGLE-SUBSCRIBING-PROGRESS';

const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    subscribingInProgress: []

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) { //переписать на один редьюсер, меняющий состояние
        case FOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (action.userId === user.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }

                    return user;
                })
            }

        case UNFOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(user => {
                    if (action.userId === user.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }

                    return user;
                })
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
//action creators
export const followSuccess = (userId) => ({type: FOLLOW_USER, userId: userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW_USER, userId: userId})
export const setUsers = (users) => ({type: SET_USERS, usersData: users})
export const setTotalUsersCount = (dig) => ({type: SET_TOTAL_USERS_COUNT, totalCount: dig})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber})
export const toggleIsFetching = (bool) => ({type: TOGGLE_IS_FETCHING, isFetching: bool})
export const toggleSubscribingProgress = (bool, id) => ({type: TOGGLE_SUBSCRIBING_PROGRESS, isFetching: bool, id: id})

//thunk creators
export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleSubscribingProgress(true, userId));
        usersAPI.unfollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleSubscribingProgress(false, userId));
        });
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleSubscribingProgress(true, userId));
        usersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(toggleSubscribingProgress(false, userId));
        });
    }
}

export default usersReducer;
