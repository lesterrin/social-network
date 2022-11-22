import s from './profile.module.css';
import MyPosts from './myposts';
import ProfileInfo from "./profile_info";

const Profile = ({postsData, addPost, newPostText, changeNewPostText}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData} addPost={addPost} newPostText={newPostText} changeNewPostText={changeNewPostText}/>
        </div>
    );
}

export default Profile;
