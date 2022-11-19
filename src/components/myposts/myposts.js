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
                <Post message='HelloWorld' likes={5}/>
                <Post message='How are you?' likes={6}/>
            </div>
        </div>
    );
}

export default MyPosts;
