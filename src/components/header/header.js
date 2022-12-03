import s from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <div className={s.header}>
            <div className={s.container}>
                <span>socnet</span>
                <div className={s.login_block}>
                    {props.isAuth ? <div>{props.login}</div> : <NavLink to={'/login'}>Login</NavLink> }
                </div></div>
        </div>
    )
}
export default Header;
