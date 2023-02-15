import PropTypes from 'prop-types';
import { FriendListItem } from "./Friend";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
    return (<ul className={css.friend__list}>
        {friends.map(item => (
            <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
            />
     
        ))}
    </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
};