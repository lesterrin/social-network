import {NavLink} from "react-router-dom";
import s from './dialogs.module.css';


const DialogsItem = ({id,name}) => {
    return(
        <NavLink to={`/dialogs/${id}`}><div className={s.dialogs_item}>{name}</div></NavLink>
    );
}

const Message = ({message}) => {
    return (
        <div className={s.message}>{message}</div>
    );
}

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                <DialogsItem name="Лосяш" id="1"/>
                <DialogsItem name="Крош" id="2"/>
                <DialogsItem name="Ежик" id="3"/>
                <DialogsItem name="Нюша" id="4"/>
                </div>
            <div className={s.messages}>
                <Message message='blabla' />
                <Message message='helloworld' />
                <Message message='its me' />
            </div>
        </div>
    )
}

export default Dialogs;
