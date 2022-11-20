import s from './myposts.module.css';
import Post from "./post";

const MyPosts = () => {

    const postsData = [
        {id: 1, message:'HelloWorld!', likes: 5},
        {id: 2, message:'ImHere', likes: 3}
    ];

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
                {
                    postsData.map(({id,message,likes}) => {
                        return <Post id={id} message={message} likes={likes}/>
                    })
                }
            </div>
        </div>
    );
}

export default MyPosts;
