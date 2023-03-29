import { useState, useCallback } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
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
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex p-10 flex-col w-11/12 justify-center items-center border-2 border-gray-900 rounded-md h-96"
      >
        <label className="flex w-full items-center mb-2">
          <FaUser className="absolute  ml-2" />
          <input
            type="text"
            placeholder="Username"
            value={userData.username}
            name="username"
            onChange={handleInputChange}
            className="w-full p-1 rounded-md pl-8"
          />
        </label>
        <label className="flex w-full items-center mb-2">
          <FaLock className="absolute  ml-2" />
          <input
            type="password"
            placeholder="Passowrd"
            value={userData.password}
            name="password"
            onChange={handleInputChange}
            className="w-full p-1 rounded-md pl-8"
          />
        </label>
        <input
          type="submit"
          value="Sign In"
          className="bg-orange-400 p-1 text-white rounded-sm w-full"
        />
      </form>
    </div>
  );
};

export default SignIn;
