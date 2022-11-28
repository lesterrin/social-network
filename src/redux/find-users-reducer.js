const initialState = {
    usersData: [
        {id: 1, name: 'Биби', location:'Луна', avatar: 'https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/9b/65/59/9b65594e-f506-ee80-5c81-843f7c7e4af2/source/256x256bb.jpg'},
        {id: 2, name: 'Лосяш', location:'Lolballsland', avatar: 'https://i.ytimg.com/vi/Uoh7Vp5g1nI/maxresdefault.jpg'},
        {id: 3, name: 'Крош', location:'Lolballsland', avatar: 'https://tlum.ru/uploads/d6d38ebcf8548d81eb1f4dc3a54ed4d62f98301b8418d226ad19c2ccb440f412.jpeg'},
        {id: 4, name: 'Ежик', location:'Lolballsland', avatar: 'https://i.ytimg.com/vi/0P2m-Bqaaq8/maxresdefault.jpg'},
        {id: 5, name: 'Нюша', location:'Lolballsland', avatar: 'https://i.ytimg.com/vi/lK3xzYGej8w/maxresdefault.jpg'},
        {id: 6, name: 'Пин', location:'Lolballsland', avatar: 'https://multsforkids.ru/data/uploads/personaji/pin/pin-kartinki-1.jpg'},
        {id: 7, name: 'Карыч', location:'Lolballsland', avatar: 'https://sites.google.com/site/smesarikiclass/_/rsrc/1463455748373/home/kar-karyc/7.png?height=400&width=384'},
        {id: 8, name: 'Совунья', location:'Lolballsland', avatar: 'https://i.pinimg.com/originals/82/22/4f/82224f69c211273de2616dd6b69e8cc6.jpg'},
        {id: 9, name: 'Бараш', location:'Lolballsland', avatar: 'https://i.pinimg.com/474x/38/98/c2/3898c2d0e9611fa6b31e0eb96b5ef02b.jpg'}
    ]
}

const findUsersReducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return state;
    }
}

export default findUsersReducer;
