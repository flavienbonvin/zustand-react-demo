import { useEffect, useState } from "react";
import todoStore from "../../stores/todoStore";
import "./todoList.css";

const ToDoList = () => {
  const [title, setTitle] = useState("");

  const todos = todoStore((state) => state.todos);
  const setTodos = todoStore((state) => state.setTodos);
  const toggleComplete = todoStore((state) => state.toggleComplete);
  const removeTodo = todoStore((state) => state.removeTodo);
  const addTodo = todoStore((state) => state.addTodo);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const handleAddTodo = () => {
    const todo = {
      title,
      completed: false,
      userId: 1,
    };

    setTitle("");
    addTodo(todo);
  };

  return (
    <div>
      <h3>To do</h3>
      {todos.length === 0 && <p>Fetching data</p>}
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo} disabled={!title}>
          Add todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id} className="todos-container">
            <li
              className={`todo ${todo.completed && "completed"}`}
              onClick={() => toggleComplete(todo)}
            >
              {todo.title}
            </li>
            <button className="remove-todo" onClick={() => removeTodo(todo)}>
              Remove
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
