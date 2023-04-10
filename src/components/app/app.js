import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom"
import s from './app.module.css';
import Sidebar from '../sidebar';
import ProfileContainer from "../profile";
import Footer from "../footer";
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import DialogsContainer from "../dialogs";
import UsersContainer from "../users";
import HeaderContainer from "../header";
import LoginContainer from "../login";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import withRouter from "../helpers/withRouter";
import {compose} from "redux";
import {initializeApp} from "../../redux/app-reducer";
import Loader from "../loader";
import Provider from "react-redux/es/components/Provider";
import store from "../../redux/redux-store";

const App = (props) => {
    useEffect(() => {
        props.initializeApp();
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
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                            <Route path="*" element={<h2>Ресурс не найден</h2>}/>
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