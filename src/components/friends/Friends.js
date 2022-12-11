import { FriendItem } from './FriendsListItem';
import PropTypes from 'prop-types';
import css from './friends.module.css';

export const Friends = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map(friend => (
      <FriendItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
);

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      key: PropTypes.number,
    })
  ),
};
