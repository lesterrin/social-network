import s from "./users.module.css";
import React, {FC} from "react";
import userPhoto from "../../assets/images/user_image.png";
import UserItem from "./user-item";
import Paginator from "./paginator/paginator";
import {UserDataType} from '../../types/types';

type PropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    users:  Array<UserDataType>,
    subscribingInProgress: Array<number>,
    follow: (userId:number)=> void,
    unfollow: (userId:number)=> void,
}

const UsersPresent: FC<PropsType> = ({unfollow, follow, users, subscribingInProgress, ...restProps}) => {

    const usersItems = users.map(({id, followed, name, status, photos}) => {
        const onClick = followed ? unfollow : follow;
        const avatar = photos.small != null ? photos.small : userPhoto;
        return <UserItem key={id} onClick={onClick} id={id} followed={followed}
                         subscribingInProgress={subscribingInProgress} name={name} status={status} avatar={avatar}/>
    });

    return (
        <div>
            {/*Заголовок прогружается с каждым обновлением страницы.
            Создать обертку Page. Вынести в заголовок в Page.*/}
            <h3>FindUsers</h3>
            {usersItems}
            <Paginator {...restProps}/>
        </div>
    );
}

export default UsersPresent;
