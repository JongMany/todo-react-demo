import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import styles from './TodoItem.module.css';

export default function TodoItem({ todo, dispatchTodos }) {
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
      <label htmlFor={todo.title} className={todo.finished ? styles.finished: ''}>{todo.title}</label>
      <button onClick={todoDeleteHandler}>
        <BsFillTrashFill />
      </button>
    </div>
  );
}
