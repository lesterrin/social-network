import s from './dialogs_item.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = ({id,name,avatar}) => {
    console.log(avatar);
    return(
        <NavLink to={`/dialogs/${id}`}>
            <div className={s.dialogs_item}>
                <div className={s.name}>{name}</div>
                <div className={s.avatar}><img src={avatar}/></div>
            </div>
        </NavLink>
    );
}

export default DialogsItem;
