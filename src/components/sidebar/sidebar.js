import {NavLink} from "react-router-dom";
import s from './sidebar.module.css';

const Sidebar = () => {
    return( //нужно как-то причесать
        <div className={s.sidebar}>
            <NavLink to='profile'>
                {({ isActive}) => (
                    <div
                        className={
                            isActive ? `${s.active} ${s.item}` : s.item
                         }>Profile</div>
                )}
            </NavLink>
            <NavLink to='dialogs'>
                {({ isActive}) => (
                    <div
                        className={
                            isActive ? `${s.active} ${s.item}` : s.item
                        }>Dialogs</div>
                )}
            </NavLink>
            <NavLink to='news'>
                {({ isActive}) => (
                    <div
                        className={
                            isActive ? `${s.active} ${s.item}` : s.item
                        }>News</div>
                )}
            </NavLink>
            <NavLink to='music'>
                {({ isActive}) => (
                    <div
                        className={
                            isActive ? `${s.active} ${s.item}` : s.item
                        }>Music</div>
                )}
            </NavLink>
            <NavLink to='settings'>
                {({ isActive}) => (
                    <div
                        className={
                            isActive ? `${s.active} ${s.item}` : s.item
                        }>Settings</div>
                )}
            </NavLink>
        </div>
    );
}

export default Sidebar;
