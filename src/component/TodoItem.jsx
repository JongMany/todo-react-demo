import React, { useContext } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import styles from './TodoItem.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function TodoItem({ todo, dispatchTodos }) {
  const {isDarkMode} = useContext(DarkModeContext);

  const todoDeleteHandler = (e) => {
    dispatchTodos({type:'delete', id: todo.id});
  };

  const todoFinishHandler = (e) => {
    dispatchTodos({type:'finished', id:todo.id, checked: e.target.checked})
  };

  return (
    <div className={styles.item}>
      <input
        type='checkbox'
        name={todo.title}
        id={todo.title}
        value={todo.title}
        className={`${styles.todoCheck}`}
        onChange={todoFinishHandler}
        checked={todo.finished}
      />
      <label htmlFor={todo.title} className={`${todo.finished ? styles.finished: ''} ${!isDarkMode && styles.lightmode}`}>{todo.title}</label>
      <button onClick={todoDeleteHandler} className={`${!isDarkMode && styles.lightmode}`}>
        <BsFillTrashFill className={`${!isDarkMode && styles.lightmode}`}/>
      </button>
    </div>
  );
}
