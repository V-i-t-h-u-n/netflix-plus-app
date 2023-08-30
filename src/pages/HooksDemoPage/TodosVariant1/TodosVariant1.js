import { useRef, useState } from 'react';

const TodosVariant1 = () => {
  const todoInput = useRef('');
  const [todoList, setTodoList] = useState([
    {
      id: '1',
      title: 'Task #1'
    },
    {
      id: '2',
      title: 'Task #143'
    }
  ]);

  const handleAddTodos = () => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        title: todoInput.current.value
      }
    ]);
  };
  return (
    <div style={{ backgroundColor: '#ddd', padding: '20px' }}>
      <h3>Todos App with useState</h3>

      <div className="row">
        <div className="col-auto">
          <input type="text" className="form-control" ref={todoInput} />
        </div>
        <div className="col-auto">
          <button className="btn btn-success" onClick={handleAddTodos}>
            ADD TODO
          </button>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todoList.map((todos) => {
                return (
                  <li className="list-group-item" key={todos.id}>
                    {todos.title}
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

export default TodosVariant1;
