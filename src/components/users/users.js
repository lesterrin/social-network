import s from './users.module.css';
import UserItem from "./user-item";
import axios from "axios";
import userPhoto from "../../assets/images/user_image.png";
import {useEffect, useState} from "react";

//При изменении одного элемента перерисовывается весь users. Переделать
const Users = ({users, follow, unfollow, setUsers}) => {

    const [page, setPage] = useState(1);
    let totalUsersCount=0;

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users',{
            params:{
                count:5,
                page: page
            }
        }).then(response => {
            setUsers(response.data.items);
            totalUsersCount = response.data.totalCount;
        });
    },[page]);

    const usersItems = users.map(({id, followed, name, status, photos}) => {
        const onClick = followed ? unfollow : follow;
        const avatar = photos.small != null ? photos.small : userPhoto;
        return <UserItem onClick={onClick} id={id} followed={followed} name={name} status={status} avatar={avatar}/>
    });

    return (
        <div>
            <h3>FindUsers</h3>
            {usersItems}
            <div>
                <span>Всего: {page}</span>
                <button onClick={()=>setPage(page+1)}>Ещё</button>
            </div>
        </div>
    )
}

export default Users;
