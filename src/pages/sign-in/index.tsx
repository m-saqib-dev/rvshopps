import { useState, useCallback } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import './style.css';
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { setUser } from '../../reducers/index';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const dispatch = useAppDispatch();
  const { loading, userData: use } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({ ...userData, [event.target.name]: event.target.value });
    },
    [userData]
  );
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setUser(userData));
    navigate('/profile', { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <FaUser />
          <input
            type="text"
            value={userData.username}
            name="username"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <FaLock />
          <input
            type="password"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
