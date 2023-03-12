import { useAppSelector } from '../../reducers/hooks';
// import './index.css';
const Profile = () => {
  const { userData } = useAppSelector((state) => state.user);
  return (
    <div className="container">
      <div className="profile">
        <h1 className="profile__username">name:{userData.username}</h1>
        <h1 className="profile__password">password:{userData.password}</h1>
      </div>
    </div>
  );
};

export default Profile;
