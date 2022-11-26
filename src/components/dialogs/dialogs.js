import React from "react";
import s from './dialogs.module.css';

const Dialogs = ({messages, dialogs,sendMessage,onMessageChange, newMessageText}) => {

    const newMessage = React.createRef();

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                {dialogs}
                </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={newMessage} onChange={() => onMessageChange(newMessage.current.value)} value={newMessageText}/>
                <button onClick={() => sendMessage(newMessage.current.value)}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;
