import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import s from './dialogs.module.css';

const Dialogs = ({store}) => {

    const messages = store.state.dialogsPage.messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    const dialogs =  store.state.dialogsPage.dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const newMessage = React.createRef();

    const useSendMessage = () => {
        store.sendMessage(newMessage.current.value);
    }

    const onMessageChange = () => {
        store.changeNewMessageText(newMessage.current.value);
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_header}>Dialogs</div>
            <div className={s.dialogs_items}>
                {dialogs}
                </div>
            <div className={s.messages}>
                {messages}
                <textarea ref={newMessage} onChange={onMessageChange} value={store.state.dialogsPage.newMessageText}/>
                <button onClick={useSendMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;
