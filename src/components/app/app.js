import {Routes, Route} from "react-router-dom"
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

const App = () => {

    return (
        <div className={s.app_wrapper}>
            <HeaderContainer />
            <div className={`${s.content_wrapper} ${s.container}`}>
                <Sidebar/>
                <div className={s.dynamic_column}>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}>
                            <Route path=":id" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/dialogs" element={<DialogsContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<LoginContainer />}/>
                        <Route path="*" element={<h2>Ресурс не найден</h2>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
