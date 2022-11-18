import s from './profile.module.css';
import MyPosts from '../myposts';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div className={s.profile_image}>
                <img src="http://u.livelib.ru/reader/Mariashka_true/o/vro4mzw2/o-o.jpeg" />
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;
