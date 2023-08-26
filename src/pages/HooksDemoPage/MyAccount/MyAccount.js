import { useState } from 'react';

const MyAccount = () => {
  const [myAccountName, setMyAccountName] = useState('Vithun');
  const [age, setAge] = useState(20);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
    </div>
  );
};

export default MyAccount;
