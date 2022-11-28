import s from './user-item.module.css';

const UserItem = ({name,avatar,location}) => {
    return(
            <div className={s.user_item}>
                <div className={s.avatar}><img src={avatar}/></div>
                <div className={s.name}>{name}</div>
                <div className={s.location}>{location}</div>
                <div className={s.action}><button>Подписаться</button></div>
            </div>
    )
}

export default UserItem;
