import s from './post.module.css';

const Post = ({message, likes}) => {
    return (
        <div className={`${s.item}`}>
            <img src='https://cdn-icons-png.flaticon.com/128/3101/3101629.png'/>
            <p>{message}</p>
            <span>{likes}</span>
        </div>
    )
}

export default Post;
