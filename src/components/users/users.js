import s from './users.module.css';
import UserItem from "./user-item";
import axios from "axios";
import userPhoto from "../../assets/images/user_image.png";
import {useEffect} from "react";
import * as React from "react";

//При изменении одного элемента перерисовывается весь users. Переделать
const Users = ({users, follow, unfollow, setUsers, currentPage, setCurrentPage, setTotalUsers, pageSize,totalUsersCount}) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users',{
            params:{
                count: pageSize,
                page: currentPage
            }
        }).then(response => {
            setUsers(response.data.items);
            setTotalUsers(response.data.totalCount);
        });
    },[currentPage]);

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    const pagesStart = ((currentPage - 5) < 0) ?  0  : currentPage - 5 ;
    const pagesEnd = currentPage + 5;
    const slicedPages = pages.slice( pagesStart, pagesEnd);

    const usersItems = users.map(({id, followed, name, status, photos}) => {
        const onClick = followed ? unfollow : follow;
        const avatar = photos.small != null ? photos.small : userPhoto;
        return <UserItem onClick={onClick} id={id} followed={followed} name={name} status={status} avatar={avatar}/>
    });

    return (
        <div>
            <h3>FindUsers</h3>
            {usersItems}
            {slicedPages.map(page=>{
                return (<button onClick={()=>setCurrentPage(page)} className={currentPage === page ? s.currentPage : ''}>{page}</button>);
            })}
            <br/>
            <span>Всего страниц: {pagesCount}</span>
        </div>
    );
}

export default Users;
