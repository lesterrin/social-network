const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';

const initialState = {
    usersData: [/*
        {id: 1, followed: false, name: 'Биби', location: {city: 'ЛунаСити', country:'ЛунаЛэнд'}, avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/9b/65/59/9b65594e-f506-ee80-5c81-843f7c7e4af2/source/256x256bb.jpg'},
        {id: 2, followed: true, name: 'Лосяш', location:{city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://i.ytimg.com/vi/Uoh7Vp5g1nI/maxresdefault.jpg'},
        {id: 3, followed: true, name: 'Крош', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://tlum.ru/uploads/d6d38ebcf8548d81eb1f4dc3a54ed4d62f98301b8418d226ad19c2ccb440f412.jpeg'},
        {id: 4, followed: true, name: 'Ежик', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://i.ytimg.com/vi/0P2m-Bqaaq8/maxresdefault.jpg'},
        {id: 5, followed: true, name: 'Нюша', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://i.ytimg.com/vi/lK3xzYGej8w/maxresdefault.jpg'},
        {id: 6, followed: true, name: 'Пин', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://multsforkids.ru/data/uploads/personaji/pin/pin-kartinki-1.jpg'},
        {id: 7, followed: true, name: 'Карыч', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://sites.google.com/site/smesarikiclass/_/rsrc/1463455748373/home/kar-karyc/7.png?height=400&width=384'},
        {id: 8, followed: true, name: 'Совунья', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://i.pinimg.com/originals/82/22/4f/82224f69c211273de2616dd6b69e8cc6.jpg'},
        {id: 9, followed: true, name: 'Бараш', location: {city: 'ЛолболлСити', country:'Лолболл Айленд'}, avatar: 'https://i.pinimg.com/474x/38/98/c2/3898c2d0e9611fa6b31e0eb96b5ef02b.jpg'}
    */]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) { //переписать на один редьюсер, меняющий состояние
        case FOLLOW_USER:
            return {
                ...state,
                usersData: state.usersData.map(user=>{
                    if(action.userId===user.id){
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
                usersData: state.usersData.map(user=>{
                    if(action.userId===user.id){
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
                usersData: [...state.usersData, ...action.usersData]
            }

        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW_USER, userId: userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW_USER, userId: userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, usersData: users})

export default usersReducer;
