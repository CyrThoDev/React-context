import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);

  const handleOnline = () => {
    setIsOnline(!isOnline);
  };
  return (
    <>
      <div>User is {isOnline ? 'Online' : 'NotOnline'}</div>

      <button type="button" onClick={handleOnline}>
        click to change user status{' '}
      </button>
    </>
  );
}

export default UserProfile;
