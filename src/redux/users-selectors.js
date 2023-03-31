import {createSelector} from 'reselect';

export const getUsersSelector = (state) => state.usersPage.usersData;

export const getUsers = createSelector(getUsers,(users)=>{
    return users.filter(u=> true);
});

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getSubscribingInProgress = (state) => state.usersPage.subscribingInProgress;
