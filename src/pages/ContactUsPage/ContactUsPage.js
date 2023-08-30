import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PageContext } from '../../contexts/PageContext/PageContext';

const ContactUsPage = () => {
  const userData = useContext(PageContext);
  return (
    <div>
      <Helmet>
        <title>Contact us</title>
      </Helmet>
      <h2>ContactUsPage</h2>
      <p>User status: {userData.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <p>Last Seen: {userData.lastSeen}</p>
    </div>
  );
};

export default ContactUsPage;
