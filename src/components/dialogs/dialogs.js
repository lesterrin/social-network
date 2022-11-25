import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import s from './dialogs.module.css';

const Dialogs = ({dialogsPage,dispatch}) => {

    const messages = dialogsPage.messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    const dialogs =  dialogsPage.dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const newMessage = React.createRef();

    const useSendMessage = () => {
        dispatch({type:'SEND-MESSAGE', newMessageText: newMessage.current.value});
    }

    const onMessageChange = () => {
        dispatch({type:'CHANGE-MESSAGE-TEXT', newMessageText: newMessage.current.value});
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                {dialogs}
                </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={newMessage} onChange={onMessageChange} value={dialogsPage.newMessageText}/>
                <button onClick={useSendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;
