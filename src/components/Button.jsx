import { useContext } from "react";
import themeContext from "../context/theme";

function Button({ text, className, ...props }) {
  const theme = useContext(themeContext);
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
