import React from 'react';
import { Helmet } from 'react-helmet';
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import applyStyles from '../../hoc/applyStyles';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>HocDemo</title>
      </Helmet>
      <div>HocDemoPage</div>

      <StyledHello name="John" />
      <StyledBye name="John" />
    </div>
  );
};

export default HocDemoPage;
