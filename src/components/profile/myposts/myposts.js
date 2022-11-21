import React from "react";
import s from './myposts.module.css';
import Post from "./post";


const MyPosts = ({postsData}) => {

    const posts = postsData.map(({id,message,likes}) => {
        return <Post id={id} message={message} likes={likes}/>
    });

    const newPostElement = React.createRef();

    const addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div>New post</div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;
