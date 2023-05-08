import {authMe} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

export type InitialStateType = {
    isInitialized: boolean
}

const initialState: InitialStateType = {
    isInitialized: false
}

const appReducer = (state = initialState, action: InitializedSuccessActionType): InitialStateType => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }

        default:
            return state;
    }
}

type InitializedSuccessActionType = { type: typeof INITIALIZED_SUCCESS; }
type ActionsTypes = InitializedSuccessActionType;

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = dispatch(authMe());

    promise.then(()=>{
        dispatch(initializedSuccess())
    });
}

export default appReducer;
