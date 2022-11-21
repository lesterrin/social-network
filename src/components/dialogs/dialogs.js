import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import s from './dialogs.module.css';

const Dialogs = ({dialogsData,messagesData}) => {

    const messages = messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    const dialogs = dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const newMessage = React.createRef();

    const sendMessage = () => {
        alert(newMessage.current.value);
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                {dialogs}
                </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={newMessage}></textarea>
                <button onClick={sendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;
