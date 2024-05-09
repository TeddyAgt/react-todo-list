import { useTodo } from "../context/todoContext";

function Button({ text, className, ...props }) {
  const { theme } = useTodo();
  return (
    <button
      {...props}
      className={`rounded bg-${theme}-500 px-2 py-1 text-white hover:bg-${theme}-600 ${className ? className : ""}`}
    >
      {text}
    </button>
  );
}

export default Button;
