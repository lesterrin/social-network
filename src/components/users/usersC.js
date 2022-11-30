import s from './users.module.css';
import * as React from "react";import UserItem from "./user-item";
import axios from "axios";
import userPhoto from "../../assets/images/user_image.png";

//При изменении одного элемента перерисовывается весь users. Переделать
class Users extends React.Component {

    getUsers = () => {
        const {users, setUsers} = this.props;
        if (users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                setUsers(response.data.items)
            });
        }
    }

    render() {
        const {unfollow, follow, users} = this.props;
        const usersItems = users.map(({id, followed, name, status, photos}) => {
            const onClick = followed ? unfollow : follow;
            const avatar = photos.small != null ? photos.small : userPhoto;
            return <UserItem onClick={onClick} id={id} followed={followed} name={name} status={status} avatar={avatar}/>
        });

        return(
            <div>
            <h3>FindUsers</h3>
            {usersItems}
            <button onClick={this.getUsers}>Получить пользователей</button>
        </div>);
    }

}

export default Users;
