import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import s from './dialogs.module.css';
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = ({dialogsPage,dispatch}) => {

    const messages = dialogsPage.messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    const dialogs =  dialogsPage.dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const newMessage = React.createRef();

    const sendMessage = (text) => {
        dispatch(sendMessageActionCreator(text));
    }

    const onMessageChange = (text) => {
        dispatch(onMessageChangeActionCreator(text));
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                {dialogs}
                </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={newMessage} onChange={() => onMessageChange(newMessage.current.value)} value={dialogsPage.newMessageText}/>
                <button onClick={() => sendMessage(newMessage.current.value)}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;
