import s from './header.module.css';
import {NavLink} from "react-router-dom";
import reactLogo from '../../assets/images/react-logo.png';

const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.title}>
                    <img src={reactLogo}/>
                    <span>SocNet</span></div>
                <div className={s.login_block}>
                    {props.isAuth ?
                        <div><span>{props.login}</span> - <button onClick={props.logout}>Logout</button></div> :
                        <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </div>
    )
}
export default Header;
