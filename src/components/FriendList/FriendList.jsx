import PropTypes from 'prop-types';
import { FriendListItem } from "./Friend"

export const FriendList = ({ friends }) => {
    return (<ul className="friend-list">
        {friends.map(item => (
                <FriendListItem
                key = {item.id}    
                avatar={item.avatar}
                name={item.name}
                isOnline = {item.isOnline}
            />    
     
  ))}
    </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}