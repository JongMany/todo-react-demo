import React, { useContext, useState } from 'react';
import { BsFillTrashFill, BsPencilFill, BsFillCheckSquareFill } from 'react-icons/bs';

import styles from './TodoItem.module.css';
import { DarkModeContext } from '../contexts/DarkModeContext';

export default function TodoItem({ todo, dispatchTodos }) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isModifyMode, setIsModifyMode] = useState(false);
  const [modifyValue, setModifyValue] = useState(todo.title);

  const todoDeleteHandler = (e) => {
    dispatchTodos({ type: 'delete', id: todo.id });
  };

  const todoFinishHandler = (e) => {
    dispatchTodos({ type: 'finished', id: todo.id, checked: e.target.checked });
  };

  const convertModifyModeHandler = (e) => {
    setIsModifyMode((prev) => !prev);
  };


  const todoModifyHandler = (e) => {
    dispatchTodos({ type: 'modify', id: todo.id, title: modifyValue });
    setIsModifyMode(false);
  };

  const modifyValueHandler = (e) => {
    setModifyValue(e.target.value);
  }

  return (
    <div className={styles.item}>
      {isModifyMode ? (
        <>
          <input
            type='text'
            value={modifyValue}
            className={styles['modify-input']}
            onChange={modifyValueHandler}
          />
          <button
            className={`${!isDarkMode && styles.lightmode}`}
            onClick={todoModifyHandler}
            >
            <BsFillCheckSquareFill/>
          </button>
        </>
      ) : (
        <>
          <input
            type='checkbox'
            name={todo.title}
            id={todo.title}
            value={todo.title}
            className={`${styles.todoCheck}`}
            onChange={todoFinishHandler}
            checked={todo.finished}
          />
          <label
            htmlFor={todo.title}
            className={`${todo.finished ? styles.finished : ''} ${
              !isDarkMode && styles.lightmode
            }`}
          >
            {todo.title}
          </label>
        </>
      )}

      <div>
        <button
          onClick={convertModifyModeHandler}
          className={`${!isDarkMode && styles.lightmode}`}
        >
          <BsPencilFill className={`${!isDarkMode && styles.lightmode}`} />
        </button>
        <button
          onClick={todoDeleteHandler}
          className={`${!isDarkMode && styles.lightmode}`}
        >
          <BsFillTrashFill className={`${!isDarkMode && styles.lightmode}`} />
        </button>
      </div>
    </div>
  );
}
