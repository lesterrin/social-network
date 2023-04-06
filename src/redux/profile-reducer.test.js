import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

const state = {
    postsData : [
        {id: 1, message:'HelloWorld!', likes: 5},
        {id: 2, message:'ImHere', likes: 3}
    ]
};

it('length of posts should be incremented', ()=> {
    //1. test data
    let action = addPostActionCreator( 'it-kamasutra.com');
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.postsData.length).toBe(3);
});

it('message of new post should be correct', ()=> {
    //1. test data
    let action = addPostActionCreator( 'it-kamasutra.com');
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.postsData[2].message).toBe('it-kamasutra.com');
});

it('after deleting length of messages should be decrement', ()=> {
    //1. test data
    let action = deletePost(1);
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.postsData.length).toBe(1);
});

it('after deleting length of messages shouldn\'t be decrement if id is incorrect', ()=> {
    //1. test data
    let action = deletePost(1000);
    //2. action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.postsData.length).toBe(2);
});