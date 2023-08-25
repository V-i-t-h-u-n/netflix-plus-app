import { Helmet } from 'react-helmet';
import MyAccount from './MyAccount/MyAccount';

const HooksDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hooks Demo</title>
      </Helmet>
      <h1>HooksDemo</h1>
      <h2>Use State Demo</h2>
      <MyAccount />
    </div>
  );
};

export default HooksDemoPage;
