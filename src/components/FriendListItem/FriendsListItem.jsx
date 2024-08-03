import s from './FriendListIte.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>{' '}
      {isOnline ? (
        <p className={s.Online}>Online</p>
      ) : (
        <p className={s.Offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
