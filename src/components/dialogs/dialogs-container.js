import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) =>{
    const dialogs = state.dialogsPage.dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const messages = state.dialogsPage.messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    return({
        dialogs: dialogs,
        messages: messages,
        newMessageText: state.dialogsPage.newMessageText
    });
}


const mapDispatchToProps = (dispatch) =>{
    return({
        sendMessage: (text)=>{dispatch(sendMessageActionCreator(text))},
        onMessageChange: (text)=>{dispatch(onMessageChangeActionCreator(text))}
    });
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
