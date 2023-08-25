import React from 'react';
import { Helmet } from 'react-helmet';
import MockFragment from './MockFragment/MockFragment';

const AboutPage = (props) => {
  const x = 10;
  return (
    <div>
      <Helmet>
        <title>About us</title>
      </Helmet>
      AboutPage
      {/* <p>{props.getTitle()}</p>
      Making delibrate error to access undefined object props
      */}
      <MockFragment>
        <h1>Testing</h1>
        <p>{x()}</p>
      </MockFragment>
    </div>
  );
};

export default AboutPage;
