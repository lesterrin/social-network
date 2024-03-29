import React from "react";
import Post from "./post";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myposts";
import {connect} from "react-redux";

const mapStateToProps = (state) =>{

    const posts = state.profilePage.postsData.map(({id, message, likes}) => {
        return <Post key={id} message={message} likes={likes}/>
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
