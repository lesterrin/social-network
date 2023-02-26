import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; //рассмотреть переход к configureStore
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import loginReducer from "./login-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    loginPage: loginReducer,
    app: appReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
