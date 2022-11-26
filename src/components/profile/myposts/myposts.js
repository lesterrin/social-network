import React from "react";
import s from './myposts.module.css';

const MyPosts = ({newPostText, posts,addPost,changeNewPostText}) => {

    const newPostElement = React.createRef();

    const onAddPost = () => {
        const text = newPostElement.current.value;
        addPost(text);
    }

    const onPostChange = () => {
        const text = newPostElement.current.value;
        changeNewPostText(text);
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
}

export default MyPosts;
