import s from './profile.module.css';
import ProfileInfo from "./profile_info";
import MyPostsContainer from "./myposts/mypost-container";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer {...props}/>
        </div>
    );
}

export default Profile;
