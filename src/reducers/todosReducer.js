export function todosReducer(todos, action){
  switch(action.type) {
    case 'add':
      return [
        ...todos,
        {
          id: action.title + Math.random(),
          'title': action.title,
          'finished': false
        }
      ];
    case 'delete':
      return todos.filter(todo => todo.id !== action.id);
    case 'finished':
      return todos.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            finished: action.checked
          }
        }
        return todo;
      })
    default:
      return todos;
  }
}

export const initialTodos = [];

// todos: