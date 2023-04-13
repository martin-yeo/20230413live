import Header from "./Header.js";
import TodoFrom from "./TodoForm.js";
import TodoList from "./TodoList.js";

export default function App({ $target }) {
  const initialText = 'mwu-todo-app 만들기';
  const initialState = ['양치', '계단오르기 운동', '푸쉬업', '샤워', '출근하기'];

  new Header({
    $target, 
    text: initialText
  });
  
  new TodoFrom({
    $target,
    onSubmit: inputtext => {
      const nextState = [...todoList.state, inputtext];
      todoList.setState(nextState);
    }
  });

  const todoList = new TodoList({
    $target,
    initialState
  });
}