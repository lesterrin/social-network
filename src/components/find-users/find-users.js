import s from './find-users.module.css';
import UserItem from "./user-item";

const FindUsers = ({users}) => {
    return(
        <div>
            <h3>FindUsers</h3>
            {users}
        </div>
    )
}

export default FindUsers;
