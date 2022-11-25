import React from "react";
import s from './myposts.module.css';
import Post from "./post";

const MyPosts = ({profilePage, dispatch}) => {

    const posts = profilePage.postsData.map(({id,message,likes}) => {
        return <Post id={id} message={message} likes={likes}/>
    });

    const newPostElement = React.createRef();

    const AddPost = () => {
        let text = newPostElement.current.value;
        dispatch({type:'ADD-POST', postMessage: text});
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        dispatch({type:'CHANGE-NEW-POST-TEXT', newPostText: text});
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div>New post</div>
                <div>
                    <textarea ref={newPostElement} value={profilePage.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;
