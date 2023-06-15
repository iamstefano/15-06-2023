import "./index.css";
import { useState } from "react";
import TodoItem from "../todoItem";
import { todos } from "../../mocks/todos";

/* import { useState } from "react"; */

const TodoList = ({ emoji }) => {
  const [todoList, setTodoList] = useState(todos);
  const onHandleTodosFilter = (nChars) => {
    setTodoList(todoList.filter((todo) => todo.title.length <= nChars));
  };

  const onClearFilter = () => setTodoList(todos);

  return (
    <div className="TodoList">
      <div className="TodoList__info">
        <h4>TODO</h4>
        <p>{todoList.length}</p>
      </div>
      <hr />
      <div className="TodoList__buttons">
        <button onClick={() => onHandleTodosFilter(16)}>Filtra per 16</button>
        <button onClick={() => onHandleTodosFilter(24)}>Filtra per 24</button>
        <button onClick={() => onHandleTodosFilter(32)}>Filtra per 32</button>
        <button onClick={onClearFilter}>Clear</button>
      </div>

      {todoList.map((todo) => (
        <TodoItem key={todo.id} data={todo} emoji={emoji} />
      ))}
    </div>
  );
};

export default TodoList;
