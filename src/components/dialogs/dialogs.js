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
    const dialogsData = [
        {id: 1, name:'Лосяш'},
        {id: 2, name:'Крош'},
        {id: 3, name:'Ежик'},
        {id: 4, name:'Нюша'}
    ];

    const messagesData = [
        {id: 1, message:'Эй'},
        {id: 2, message:'Привет'},
        {id: 3, message:'Как дела?'}
        ];

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                {
                    dialogsData.map(({id,name}) => {
                        return <DialogsItem name={name} id={id}/>
                    })
                }
                </div>
            <div className={s.messages}>
                {
                    messagesData.map(({id,message}) => {
                        return <Message id={id} message={message} />
                    })
                }
            </div>
        </div>
    )
}

export default Dialogs;
