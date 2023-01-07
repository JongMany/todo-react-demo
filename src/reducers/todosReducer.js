export function todosReducer(todos, action){
  switch(action.type) {
    case 'add':
      const addData = [
        ...todos,
        {
          id: action.title + Math.random(),
          'title': action.title,
          'finished': false
        }
      ];
      localStorage.setItem('todo', JSON.stringify(addData));
      return addData;
    case 'delete':
      const removeData =todos.filter(todo => todo.id !== action.id);
      localStorage.setItem('todo', JSON.stringify(removeData));
      return removeData;
    case 'finished':
      const finishedData = todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            finished: action.checked
          }
        }
        return todo;
      });
      localStorage.setItem('todo', JSON.stringify(finishedData));
      return finishedData;
    case 'getFromLocalStorage':
      return action.todos;
    case 'modify':
      return todos.map(todo => todo.id === action.id ? {...todo, title: action.title}: todo);
    default:
      return todos;
  }
}

export const initialTodos = [];

// todos: