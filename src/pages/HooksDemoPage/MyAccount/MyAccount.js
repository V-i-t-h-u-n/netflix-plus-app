import { useContext, useState } from 'react';
import { PageContext } from '../../../contexts/PageContext/PageContext';

const MyAccount = () => {
  const [myAccountName, setMyAccountName] = useState('Vithun');
  const [age, setAge] = useState(20);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const userData = useContext(PageContext);
  const handleCHangeMyAccountName = () => {
    setMyAccountName('VC Vithun');
  };
  return (
    <div>
      MyAccount
      <h2>Account Name : {myAccountName}</h2>
      <button type="button" onClick={handleCHangeMyAccountName}>
        Change Account Name
      </button>
      <h2>
        {myAccountName} Age : {age}
      </h2>
      <button
        type="button"
        onClick={() => {
          setAge(21);
        }}
      >
        Change Age
      </button>
      <hr />
      <button
        type="button"
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
          console.log(isLoggedIn);
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      <h3>PageContext</h3>
      <p>{userData.isLoggedIn ? 'LoggedIn' : 'LoggedOut'}</p>
      <p>Last Seen: {userData.lastSeen}</p>
    </div>
  );
};

export default MyAccount;
