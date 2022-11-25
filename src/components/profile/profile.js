import s from './profile.module.css';
import MyPosts from './myposts';
import ProfileInfo from "./profile_info";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts {...props}/>
        </div>
    );
}

export default Profile;
