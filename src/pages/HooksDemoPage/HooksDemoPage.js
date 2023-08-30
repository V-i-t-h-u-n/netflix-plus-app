import { Helmet } from 'react-helmet';
import MyAccount from './MyAccount/MyAccount';
import Blog from './Blog/Blog';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

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

      <h1>useReducer and useRef Hook</h1>
      <TodosVariant1 />
      <TodosVariant2 />
    </div>
  );
};

export default HooksDemoPage;
