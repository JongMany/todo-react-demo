import React, { useState } from 'react'

import styles from './Input.module.css';

export default function Input({dispatchTodos}) {
  const [todoValue, setTodoValue] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatchTodos({type: 'add', title:todoValue});
    setTodoValue('');
  }

  const todoInputHandler = (e) => {
    setTodoValue(e.target.value);
  }

  
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input placeholder='Add Todo' value={todoValue} onChange={todoInputHandler} />
      <button>Add</button>
    </form>
  )
}
