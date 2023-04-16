import React, {Suspense, useEffect} from "react";
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import store from "../../redux/redux-store";

import s from './app.module.css';
import Provider from "react-redux/es/components/Provider";
import {initializeApp} from "../../redux/app-reducer";
import withRouter from "../helpers/withRouter";
import Loader from "../loader";
import HeaderContainer from "../header";
import Sidebar from '../sidebar';
import Footer from "../footer";
import ProfileContainer from "../profile";
import UsersContainer from "../users";
import LoginContainer from "../login";
import WithSuspense from "../hoc/withSuspense";

const Music = React.lazy(() => import('../music'));
const News = React.lazy(() => import('../news'));
const Settings = React.lazy(() => import('../settings'));
const DialogsContainer = React.lazy(() => import('../dialogs'));

const App = (props) => {

    const catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent);
        console.error(promiseRejectionEvent);
    }

    useEffect(() => {
        props.initializeApp();
        window.addEventListener("unhandledrejection", (e) => catchAllUnhandledErrors(e));
        return window.removeEventListener("unhandledrejection", (e) => catchAllUnhandledErrors(e));
    }, []);

    if (!props.isInitialized) {
        return <Loader/>
    } else {
        return (
            <div className={s.app_wrapper}>
                <HeaderContainer/>
                <div className={`${s.content_wrapper} ${s.container}`}>
                    <Sidebar/>
                    <div className={s.dynamic_column}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile"/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":id" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path="/dialogs" element={<WithSuspense component={<DialogsContainer/>}/>}/>
                            <Route path="/news" element={<WithSuspense component={<News/>}/>}/>
                            <Route path="/music" element={<WithSuspense component={<Music/>}/>}/>
                            <Route path="/settings" element={<WithSuspense component={<Settings/>}/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                            <Route path="*" element={<h2>404 Ресурс не найден</h2>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInitialized: state.app.isInitialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

const MainApp = () => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
)

export default MainApp;
