import { Routes, Route } from "react-router-dom"

import s from './app.module.css';
import Header from '../header';
import Sidebar from '../sidebar';
import Profile from "../profile";
import Footer from "../footer";
import Music from "../music";
import News from "../news";
import Settings from "../settings";
import DialogsContainer from "../dialogs/dialogs-container";

const App = () => {

  return (
   <div className={s.app_wrapper}>
     <Header/>
     <div className={`${s.content_wrapper} ${s.container}`}>
       <Sidebar />
       <div className={s.dynamic_column}>
           <Routes>
               <Route path="/profile" element={<Profile />} />
               <Route path="/dialogs" element={<DialogsContainer />} />
               <Route path="/news" element={<News/>} />
               <Route path="/music" element={<Music/>} />
               <Route path="/settings" element={<Settings/>} />
           </Routes>
       </div>
     </div>
       <Footer/>
   </div>
  );
}

export default App;
