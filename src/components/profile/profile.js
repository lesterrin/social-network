import s from './profile.module.css';
import ProfileInfo from "./profile_info";
import MyPostsContainer from "./myposts/mypost-container";

const Profile = () => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
