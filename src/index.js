import React from 'react';
import './index.css';
//import state, {subscribe} from './state/state';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { BrowserRouter } from "react-router-dom";
//import { addPost, changeNewPostText, sendMessage, changeNewMessageText } from './state/state'
import store from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (store) => {
    root.render(
        <BrowserRouter>
            {/*<App {...state} addPost={addPost} changeNewPostText={changeNewPostText} sendMessage={sendMessage} changeNewMessageText={changeNewMessageText}/>*/}
            <App store={store}/>
        </BrowserRouter>
    );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);

