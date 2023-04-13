import Header from "./Header.js";
import TodoFrom from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({ $target }) {
  new Header({$target});
  new TodoFrom({$target});
  new TodoList({$target});
}