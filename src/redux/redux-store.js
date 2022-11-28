import {combineReducers, legacy_createStore as createStore} from "redux"; //рассмотреть переход к configureStore
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import findUsersReducer from "./find-users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    findUsersPage: findUsersReducer
});

const store = createStore(reducers);

export default store;
