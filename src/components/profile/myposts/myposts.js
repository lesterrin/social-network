import React from "react";
import s from './myposts.module.css';
import {maxLength} from "../../utils/validators";

const MyPosts = React.memo(({newPostText, posts, addPost, changeNewPostText}) => {

    const newPostElement = React.createRef();

    const onAddPost = () => {
        const text = newPostElement.current.value;

        if (newPostText) addPost(text);
        else newPostElement.current.classList.add(s.error);
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        if (maxLength(text, 30)) {
            changeNewPostText(text);
            newPostElement.current.classList.remove(s.error)
        } else newPostElement.current.classList.add(s.error);
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div>New post</div>
                <div>
                    <textarea ref={newPostElement}
                              value={newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
});

export default MyPosts;
