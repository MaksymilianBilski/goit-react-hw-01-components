import { FriendsListItem } from '../FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import css from './friendsList.module.css';

export const FriendsList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(friend => (
      <FriendsListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      key: PropTypes.number,
    })
  ),
};
