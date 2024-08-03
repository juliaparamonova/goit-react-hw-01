import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.profile}>
      <div className={s.block}>
        <img className={s.userAvatar} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.listItem}>
          <span>Followers</span>
          <span className={s.text}>{followers}</span>
        </li>
        <li className={s.listItem}>
          <span>Views</span>
          <span className={s.text}>{views}</span>
        </li>
        <li className={s.listItem}>
          <span>Likes</span>
          <span className={s.text}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
