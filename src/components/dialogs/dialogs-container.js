import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = ({dialogsPage,dispatch}) => {

    const messages = dialogsPage.messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    const dialogs =  dialogsPage.dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const sendMessage = (text) => {
        dispatch(sendMessageActionCreator(text));
    }

    const onMessageChange = (text) => {
        dispatch(onMessageChangeActionCreator(text));
    }

    return <Dialogs dialogs={dialogs}
                    messages={messages}
                    newMessageText={dialogsPage.newMessageText}
                    sendMessage={sendMessage}
                    onMessageChange={onMessageChange}/>
}

export default DialogsContainer;
