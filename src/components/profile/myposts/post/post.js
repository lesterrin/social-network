import s from './post.module.css';

const Post = ({message, likes}) => {
    return (
/*        <div className={`${s.item}`}>
            <img src='https://cdn-icons-png.flaticon.com/128/3101/3101629.png'/>
            <p>{message}</p>
            <span>{likes}</span>
        </div> */
        <div className={s.item}>
            <div className={s.avatar}><img src='https://cdn-icons-png.flaticon.com/128/3101/3101629.png'/></div>
            <div className={s.name}></div>
            <div className={s.message}>{message}</div>
            <div className={s.likes}>{likes}</div>
        </div>
    )
}

export default Post;
