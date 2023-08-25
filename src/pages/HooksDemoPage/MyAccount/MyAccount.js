import { useState } from 'react';

const MyAccount = () => {
  const [myAccountName, setMyAccountName] = useState('Vithun');

  const handleCHangeMyAccountName = () => {
    setMyAccountName('VC Vithun')
  }
  return (
    <div>
      MyAccount
      <h2>Account Name : {myAccountName}</h2>

      <button type='button' onClick={handleCHangeMyAccountName}>Change Account Name</button>
    </div>
  );
};

export default MyAccount;
