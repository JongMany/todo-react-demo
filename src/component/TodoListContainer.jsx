import React from 'react'

import styles from './TodoListContainer.module.css';
import TodoItem from './TodoItem';

export default function TodoListContainer({todos, dispatchTodos, menuOptions}) {
  let todolist = todos;

  if (menuOptions === 'all') {
    todolist = todos;
  } else if (menuOptions === 'active') {
    todolist = todos.filter(todo => !todo.finished);
  } else if (menuOptions === 'completed') {
    todolist = todos.filter(todo => todo.finished);
  }

  return (
    <div className={styles.container}>
      {
        // TODO: 배열을 mapping하기
        todolist.map(todo => <TodoItem key={todo.id} todo={todo} dispatchTodos={dispatchTodos} />)
      }
    </div>
  )
}
