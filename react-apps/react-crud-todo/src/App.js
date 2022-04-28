import { useState } from 'react';
import './App.css';

export default function App() = {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState('');

  return (
    <div class="App">
      <from>
        <input
        name="todo"
        type="text"
        placeholder="Create a new todo"
        />
      </from>

      <ul className="todo-list">
        {todos.map((top) => {
          <li>{todo}</li>
        })};
      </ul>
    </div>
  );
};
