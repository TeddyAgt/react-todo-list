function todoReducer(state, action) {
  switch (action.type) {
    case "SET_THEME": {
      return {
        ...state,
        theme: action.color,
      };
    }

    case "ADD_TODO": {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: crypto.randomUUID(),
            task: action.task,
            editMode: false,
            done: false,
            selected: false,
          },
        ],
      };
    }

    case "DELETE_TODO": {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.id),
      };
    }

    case "TOGGLE_DONE": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    }

    case "TOGGLE_EDIT_MODE": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id ? { ...todo, editMode: !todo.editMode } : todo,
        ),
      };
    }

    case "EDIT_TODO": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, task: action.task, editMode: false }
            : todo,
        ),
      };
    }

    case "TOGGLE_SELECT": {
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.id
            ? { ...todo, selected: true }
            : { ...todo, selected: false },
        ),
      };
    }

    default: {
      throw new Error("Action unknown");
    }
  }
}

export default todoReducer;
