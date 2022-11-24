import s from './profile.module.css';
import MyPosts from './myposts';
import ProfileInfo from "./profile_info";

const Profile = ({store}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts store={store}/>
        </div>
    );
}

export default Profile;
