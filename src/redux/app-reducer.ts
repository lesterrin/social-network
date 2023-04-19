/*
import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}

type InitialStateType = {
    isInitialized: boolean
}

type ReducerType = {};

const initialState: InitialStateType = {
    isInitialized: false
}


const appReducer = (state = initialState, action): ReducerType => {

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

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    promise.then(() => {
        dispatch(initializedSuccess())
    });
}

export default appReducer;
*/

import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action: any) => {

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

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMe());

    promise.then(()=>{
        dispatch(initializedSuccess())
    });
}

export default appReducer;
