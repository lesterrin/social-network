import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import { BrowserRouter } from "react-router-dom";
//import store from './redux/store';
import store from './redux/redux-store';
import Provider from "react-redux/es/components/Provider";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (store) => {

    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}

rerenderEntireTree(store);

store.subscribe(()=> {
    rerenderEntireTree(store);
});
