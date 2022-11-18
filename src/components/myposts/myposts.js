import s from './myposts.module.css';
import Post from "../post";

const MyPosts = () => {
    const auth = {
        name: 'VS'
    };
    return(
        <div>
            My posts
            <div>
                <div>New post</div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message='HelloWorld' auth={auth}/>
                <Post message='How are you?' auth={auth}/>
            </div>
        </div>
    );
}

export default MyPosts;
