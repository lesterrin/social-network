import logo from '../../logo.svg';
import './app.css';
import Header from '../header';
import Sidebar from '../sidebar';
import Profile from "../profile";

const App = () => {
  return (
   <div className='app-wrapper'>
     <Header/>
     <div className='content-wrapper container'>
       <Sidebar />
       <Profile />
     </div>
   </div>
  );
}

export default App;
