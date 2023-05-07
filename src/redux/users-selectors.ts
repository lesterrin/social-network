import {createSelector} from 'reselect';
import {AppStateType} from "./redux-store";

export const getUsersSelector = (state: AppStateType) => state.usersPage.usersData;

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
});

export const getPageSize = (state: AppStateType) => state.usersPage.pageSize;

export const getTotalUsersCount = (state: AppStateType) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state: AppStateType) => state.usersPage.currentPage;

export const getIsFetching = (state: AppStateType) => state.usersPage.isFetching;

export const getSubscribingInProgress = (state: AppStateType) => state.usersPage.subscribingInProgress;
