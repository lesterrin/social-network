import s from './profile.module.css';
import ProfileInfo from "./profile_info";
import MyPostsContainer from "./myposts/mypost-container";

const Profile = ({userProfile}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={userProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
