import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { BrowserRouter } from "react-router-dom";
import store from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (store) => {
    root.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
    );
}

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);

