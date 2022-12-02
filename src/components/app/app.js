import { Routes, Route } from "react-router-dom"
import s from './app.module.css';
import Header from '../header';
import Sidebar from '../sidebar';
import ProfileContainer from "../profile";
import Footer from "../footer";
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import DialogsContainer from "../dialogs";
import UsersContainer from "../users";

const App = () => {

  return (
   <div className={s.app_wrapper}>
     <Header/>
     <div className={`${s.content_wrapper} ${s.container}`}>
       <Sidebar />
       <div className={s.dynamic_column}>
           <Routes>
               <Route path="/profile:id" element={<ProfileContainer />} />
               <Route path="/dialogs" element={<DialogsContainer />} />
               <Route path="/news" element={<News/>} />
               <Route path="/music" element={<Music/>} />
               <Route path="/settings" element={<Settings/>} />
               <Route path="/users" element={<UsersContainer/>} />
               <Route path="*" element={<h2>Ресурс не найден</h2>} />
           </Routes>
       </div>
     </div>
       <Footer/>
   </div>
  );
}

export default App;
