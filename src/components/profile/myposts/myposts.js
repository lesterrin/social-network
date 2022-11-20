import s from './myposts.module.css';
import Post from "./post";

const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            <h3>My posts</h3>
            <div>
                <div>New post</div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='HelloWorld' likes={5}/>
                <Post message='How are you?' likes={6}/>
            </div>
        </div>
    );
}

export default MyPosts;
