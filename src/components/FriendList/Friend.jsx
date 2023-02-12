import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

export const FriendListItem = ({ avatar, name, isOnline}) => {

    return (
        <li className={css.item}>
            { isOnline ? <span className={css.statusOn}></span>: <span className={css.statusOff}></span>}
  <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
</li>
    )

}

FriendListItem.propTypes = {
    avatar:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,

}