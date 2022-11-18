import s from './post.module.css';

const Post = ({message, auth}) => {
    const {name} = auth;
    return (
        <div className={`${s.item}`}>
            <img src='https://cdn-icons-png.flaticon.com/128/3101/3101629.png'/>
            <span>{name}</span>
            <p>{message}</p>
            <span>like</span>
        </div>
    )
}

export default Post;
