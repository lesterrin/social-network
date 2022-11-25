import React from "react";
import s from './myposts.module.css';
import Post from "./post";

const MyPosts = ({profilePage, addPost,changeNewPostText}) => {
    const posts = profilePage.postsData.map(({id,message,likes}) => {
        return <Post id={id} message={message} likes={likes}/>
    });

    const newPostElement = React.createRef();

    const useAddPost = () => {
        let text = newPostElement.current.value;
        addPost(text);
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        changeNewPostText(text);
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
                    <button onClick={useAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;
