import { Helmet } from 'react-helmet';
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';

const HooksDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>Hooks Demo</title>
      </Helmet>
      <h1>HooksDemo</h1>
      <h2>Use State Demo</h2>
      <MyAccount />

      <h1>useEffect Demo</h1>
      <Blog />
    </div>
  );
};

export default HooksDemoPage;
