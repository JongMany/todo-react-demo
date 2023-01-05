import './App.css';
import { useContext, useReducer, useState } from 'react';

import Header from './component/Header';
import TodoListContainer from './component/TodoListContainer';
import Input from './component/Input';
// import { DarkModeContext } from './contexts/DarkModeContext';
import { initialTodos, todosReducer } from './reducers/todosReducer';
import InputContainer from './component/InputContainer';

function App() {
  // const {isDarkMode, toggleDarkMode} = useContext(DarkModeContext);
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos);
  const [menuOptions, setMenuOptions] = useState('all');
  console.log(todos);

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
