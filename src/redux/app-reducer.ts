import {authMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app/INITIALIZED-SUCCESS';

export type InitialStateType = {
    isInitialized: boolean
}

const initialState: InitialStateType = {
    isInitialized: false
}

const appReducer = (state = initialState, action: any): InitialStateType => {

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

type InitializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS;
}

export const initializedSuccess = (): InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(authMe());

    promise.then(()=>{
        dispatch(initializedSuccess())
    });
}

export default appReducer;
