import s from './profile.module.css';
import MyPosts from './myposts';
import ProfileInfo from "./profile_info";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
}

export default Profile;
