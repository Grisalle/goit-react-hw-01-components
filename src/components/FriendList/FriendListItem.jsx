export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span
        className="isOnline"
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className="avatar" src={avatar} alt={`${name} avatar`} />
      <p className="name">{name}</p>
    </li>
  );
};
