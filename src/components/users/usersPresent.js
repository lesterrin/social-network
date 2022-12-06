import s from "./users.module.css";
import * as React from "react";
import userPhoto from "../../assets/images/user_image.png";
import UserItem from "./user-item";

const UsersPresent = ({totalUsersCount,pageSize,currentPage,unfollow,follow,users,onPageChanged,subscribingInProgress}) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const pagesStart = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
    const pagesEnd = currentPage + 5;
    const slicedPages = pages.slice(pagesStart, pagesEnd);

    const usersItems = users.map(({id, followed, name, status, photos}) => {
        const onClick = followed ? unfollow : follow;
        const avatar = photos.small != null ? photos.small : userPhoto;
        return <UserItem onClick={onClick} id={id} followed={followed} subscribingInProgress={subscribingInProgress} name={name} status={status} avatar={avatar}/>
    });

    return (
        <div>
            {/*Заголовок прогружается с каждым обновлением страницы.
            Создать обертку Page. Вынести в заголовок в Page.*/}
            <h3>FindUsers</h3>
            {usersItems}
            {slicedPages.map(page => {
                return (<button onClick={() => onPageChanged(page)}
                                className={currentPage === page ? s.currentPage : ''}>{page}</button>);
            })}
            <span>Всего страниц: {pagesCount}</span>
        </div>
    );
}

export default UsersPresent;
