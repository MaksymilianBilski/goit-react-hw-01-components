import css from '../Friends/friends.module.css';

export const FriendItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={css.status}>
      {isOnline ? (
        <span className={css.online}></span>
      ) : (
        <span className={css.offline}></span>
      )}
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);
