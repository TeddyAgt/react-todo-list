import { useReducer } from "react";
import themeContext from "../context/theme";
import {
  todoStateContext,
  todoDispatcherContext,
} from "../context/todoContext";
import todoReducer from "../reducers/todoReducer";

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, {
    theme: "sky",
    todoList: [],
  });

  return (
    <todoStateContext.Provider value={state}>
      <todoDispatcherContext.Provider value={dispatch}>
        <themeContext.Provider value={state.theme}>
          {children}
        </themeContext.Provider>
      </todoDispatcherContext.Provider>
    </todoStateContext.Provider>
  );
}

export default TodoProvider;
