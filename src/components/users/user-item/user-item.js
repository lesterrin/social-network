import s from './user-item.module.css';

const UserItem = ({id, name,avatar,location,followed, onClick}) => {
    return(
            <div className={s.user_item} key={id}>
                <div className={s.avatar}><img src={avatar}/></div>
                <div className={s.name}>{name}</div>
                <div className={s.location}>{location.city}, {location.country}</div>
                <div className={s.action}><button onClick={()=>onClick(id)}>{followed ? 'Отписаться' : 'Подписаться'}</button></div>
            </div>
    )
}

export default UserItem;
