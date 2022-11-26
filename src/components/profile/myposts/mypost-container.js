import React from "react";
import Post from "./post";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./myposts";

const MyPostsContainer = ({profilePage, dispatch}) => {

    const posts = profilePage.postsData.map(({id,message,likes}) => {
        return <Post id={id} message={message} likes={likes}/>
    });

    const addPost = (text) => dispatch(addPostActionCreator(text))

    const onPostChange = (text) => dispatch(changeNewPostTextActionCreator(text))

    return <MyPosts newPostText={profilePage.newPostText}
                    posts={posts} addPost={addPost}
                    changeNewPostText={onPostChange}/>
}

export default MyPostsContainer;
