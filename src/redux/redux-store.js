import {combineReducers, legacy_createStore as createStore} from "redux"; //рассмотреть переход к configureStore
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

const store = createStore(reducers);

export default store;
