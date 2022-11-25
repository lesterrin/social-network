import { Routes, Route } from "react-router-dom"

import './app.css';
import Header from '../header';
import Sidebar from '../sidebar';
import Profile from "../profile";
import Footer from "../footer";
import Dialogs from "../dialogs";
import Music from "../music";
import News from "../news";
import Settings from "../settings";

const App = ({state,dispatch,sendMessage,changeNewMessageText}) => {
  return (
   <div className='app-wrapper'>
     <Header/>
     <div className='content-wrapper container'>
       <Sidebar />
       <div className='dynamic_column'>
           <Routes>
               <Route path="/profile" element={<Profile profilePage={state.profilePage} dispatch={dispatch}/>} />
               <Route path="/dialogs" element={<Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch}/>} />
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
