import { FriendItem } from './friends_item/FriendsListItem';
import PropTypes from 'prop-types';
import css from 'M:/programy/Programy_kodowanie/github/goit-react-hw-01-components/src/components/Friends/friends.module.css';

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
