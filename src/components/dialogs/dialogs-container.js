import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = ({dialogsPage: {dialogsData, messagesData, newMessageText}}) => {
    const dialogs = dialogsData.map(dialogData => {
        return <DialogsItem {...dialogData}/>
    });

    const messages = messagesData.map(messageData => {
        return <Message {...messageData} />
    });

    return {dialogs, messages, newMessageText};
}


const mapDispatchToProps = (dispatch) => {
    return ({
        sendMessage: (text) => {
            dispatch(sendMessageActionCreator(text))
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    });
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
