import React from "react";
import DialogsItem from './dialogs_item';
import Message from './message';
import {onMessageChangeActionCreator, sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {({getState, dispatch}) => {

                const dialogsPage = getState().dialogsPage;

                const messages = dialogsPage.messagesData.map(messageData => {
                    return <Message {...messageData} />
                });

                const dialogs = dialogsPage.dialogsData.map(dialogData => {
                    return <DialogsItem {...dialogData}/>
                });

                const sendMessage = (text) => {
                    dispatch(sendMessageActionCreator(text));
                }

                const onMessageChange = (text) => {
                    dispatch(onMessageChangeActionCreator(text));
                }

                return (
                    <Dialogs dialogs={dialogs}
                             messages={messages}
                             newMessageText={dialogsPage.newMessageText}
                             sendMessage={sendMessage}
                             onMessageChange={onMessageChange}/>
                );
            }
            }
        </StoreContext.Consumer>
    );
}*/

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

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
