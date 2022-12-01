import s from './user-item.module.css';
import {NavLink} from "react-router-dom";

const UserItem = ({id, name,avatar,status,followed, onClick}) => {
    return(
            <div className={s.user_item} key={id}>
                <div className={s.avatar}><NavLink to={`/profile/${id}`}><img src={avatar}/></NavLink></div>
                <div className={s.name}>{name}</div>
                <div className={s.status}>{status}</div>
                <div className={s.action}><button onClick={()=>onClick(id)}>{followed ? 'Отписаться' : 'Подписаться'}</button></div>
            </div>
    )
}

export default UserItem;
