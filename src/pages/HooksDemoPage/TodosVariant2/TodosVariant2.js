import { useEffect, useReducer, useRef } from 'react';
import todoReducer from '../../../reducer/todoReducer/todoReducer';
import axios from 'axios';

const TodosVariant2 = () => {
  const todoInput = useRef('');
  const [todoList, todoDispatch] = useReducer(todoReducer);
  console.log(todoList); // undefined
  console.log(todoDispatch); // dispatcher fn must be called with an action obj to get state data from the reducer

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then((res) => {
        todoDispatch({
          type: 'LIST_TODO',
          payload: res.data
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);

  const handleAddTodos = () => {
    console.log(todoInput.current.value);
    todoDispatch({
      type: 'ADD_TODO',
      payload: {
        id: Math.floor(Math.random() * 100000),
        title: todoInput.current.value,
        isCompleted: false
      }
    });
  };

  // const handleDeleteTodos = () => {
  //   todoDispatch({
  //     type:'DELETE_TODO',
  //     payload:{

  //     }
  //   })
  // }

  return (
    <div style={{ backgroundColor: '#C5E1A5', padding: '20px' }}>
      <h3>Todos App with useReducer</h3>

      <div className="row">
        <div className="col-auto">
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodos}>
            ADD TODO
          </button>
          {/* <button className="btn btn-success" onClick={handleDeleteTodos}>
            DELETE TODO
          </button> */}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoList?.map((todo) => {
                return (
                  <li key={todo.id} className="list-group-item">
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodosVariant2;
