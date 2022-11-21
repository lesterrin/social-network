import s from './profile.module.css';
import MyPosts from './myposts';
import ProfileInfo from "./profile_info";

const Profile = ({postsData}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    );
}

export default Profile;
