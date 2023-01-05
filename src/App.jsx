import './App.css';
import { useContext, useReducer, useState, useEffect } from 'react';

import Header from './component/Header';
import TodoListContainer from './component/TodoListContainer';
import Input from './component/Input';
import { DarkModeContext, DarkModeProvider } from './contexts/DarkModeContext';
import { initialTodos, todosReducer } from './reducers/todosReducer';
import InputContainer from './component/InputContainer';

function App() {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);
  const [menuOptions, setMenuOptions] = useState('all');
  
  useEffect(()=>{
    const localTodo = JSON.parse(localStorage.getItem('todo'));
    dispatchTodos({type: 'getFromLocalStorage', todos: localTodo}); 
  }, []);

  return (
    <div className='todo-container'>
      <Header setMenuOptions={setMenuOptions} menuOptions={menuOptions} />
      <TodoListContainer todos={todos} menuOptions={menuOptions} dispatchTodos={dispatchTodos} />
      <InputContainer dispatchTodos={dispatchTodos}>
        <Input dispatchTodos={dispatchTodos} />
      </InputContainer>
    </div>
  );
}

export default App;
