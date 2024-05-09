import { createContext, useContext } from "react";

export const todoStateContext = createContext(null);
export const todoDispatcherContext = createContext(null);

export const useTodo = () => useContext(todoStateContext);
export const useTodoDispatch = () => useContext(todoDispatcherContext);
