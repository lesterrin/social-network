import s from './post.module.css';
import imgSrc from '../../../../assets/images/user_image.png';

const Post = ({message, likes}) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}><img src={imgSrc}/></div>
            <div className={s.name}></div>
            <div className={s.message}>{message}</div>
            <div className={s.likes}>{likes}</div>
        </div>
    )
}

export default Post;
