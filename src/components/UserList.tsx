import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/actions';
import { usersSelector } from '../redux/users/selectors';
import Loader from './Loader';

const UserList: FC = () => {
  const { data, error, loading } = useSelector(usersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div className='block'>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UserList;
