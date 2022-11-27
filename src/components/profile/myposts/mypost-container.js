import React from "react";
import Post from "./post";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myposts";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {({getState, dispatch}) => {
                const profilePage = getState().profilePage;

                const posts = profilePage.postsData.map(({id, message, likes}) => {
                    return <Post id={id} message={message} likes={likes}/>
                });

                const addPost = (text) => dispatch(addPostActionCreator(text))

                const onPostChange = (text) => dispatch(changeNewPostTextActionCreator(text))
                return (<MyPosts newPostText={profilePage.newPostText}
                                 posts={posts}
                                 addPost={addPost}
                                 changeNewPostText={onPostChange}/>);
            }
            }
        </StoreContext.Consumer>
    );
}*/

const mapStateToProps = (state) =>{

    const posts = state.profilePage.postsData.map(({id, message, likes}) => {
        return <Post id={id} message={message} likes={likes}/>
    });

    return ({
        newPostText: state.profilePage.newPostText,
        posts: posts
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        changeNewPostText: (text)=> {
            dispatch(changeNewPostTextActionCreator(text))
        },
        addPost: (text) => {
            dispatch(addPostActionCreator(text))
        }
    });
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
