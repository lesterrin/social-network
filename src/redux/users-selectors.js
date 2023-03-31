export const getUsers = (state) => state.usersPage.usersData;

export const getPageSize = (state) => state.usersPage.pageSize;

export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount;

export const getCurrentPage = (state) => state.usersPage.currentPage;

export const getIsFetching = (state) => state.usersPage.isFetching;

export const getSubscribingInProgress = (state) => state.usersPage.subscribingInProgress;