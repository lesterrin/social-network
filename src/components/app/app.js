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

const App = ({profilePage, dialogsPage, addPost, changeNewPostText, sendMessage, changeNewMessageText}) => {
  return (
   <div className='app-wrapper'>
     <Header/>
     <div className='content-wrapper container'>
       <Sidebar />
       <div className='dynamic_column'>
           <Routes>
               <Route path="/profile" element={<Profile {...profilePage} addPost={addPost} changeNewPostText={changeNewPostText}/>} />
               <Route path="/dialogs" element={<Dialogs {...dialogsPage} sendMessage={sendMessage} changeNewMessageText={changeNewMessageText}/>} />
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
