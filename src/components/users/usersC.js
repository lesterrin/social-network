import s from './users.module.css';
import * as React from "react";
import UserItem from "./user-item";
import axios from "axios";
import userPhoto from "../../assets/images/user_image.png";

//При изменении одного элемента перерисовывается весь users. Переделать
class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            params: {
                count: this.props.pageSize,
                page: this.props.currentPage
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        });
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get('https://social-network.samuraijs.com/api/1.0/users', {
            params: {
                count: this.props.pageSize,
                page: page
            }
        }).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsers(response.data.totalCount);
        });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        const currentPage = this.props.currentPage;
        const pagesStart = ((currentPage - 5) < 0) ? 0 : currentPage - 5;
        const pagesEnd = currentPage + 5;
        const slicedPages = pages.slice(pagesStart, pagesEnd);

        const {unfollow, follow, users} = this.props;
        const usersItems = users.map(({id, followed, name, status, photos}) => {
            const onClick = followed ? unfollow : follow;
            const avatar = photos.small != null ? photos.small : userPhoto;
            return <UserItem onClick={onClick} id={id} followed={followed} name={name} status={status} avatar={avatar}/>
        });

        return (
            <div>
                <h3>FindUsers</h3>
                {usersItems}
                {slicedPages.map(page => {
                    return (<button onClick={() => this.onPageChanged(page)}
                                    className={this.props.currentPage === page ? s.currentPage : ''}>{page}</button>);
                })}
                <span>Всего страниц: {pagesCount}</span>
            </div>
        );
    }

}

export default Users;
