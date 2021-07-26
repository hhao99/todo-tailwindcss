import React, {useContext} from "../../../_snowpack/pkg/react.js";
import {observer} from "../../../_snowpack/pkg/mobx-react-lite.js";
import TodoContext from "./TodoContext.js";
import Todo from "./Todo.js";
const _TodoList = () => {
  const {todoListStore} = useContext(TodoContext);
  const {todos} = todoListStore;
  return /* @__PURE__ */ React.createElement("div", {
    className: "inline:flex bg-grey-300"
  }, /* @__PURE__ */ React.createElement("ul", null, todos.length === 0 ? "no" : todos.map((todo, index) => /* @__PURE__ */ React.createElement(Todo, {
    key: todo.id,
    index,
    todo
  }))));
};
const TodoList = observer(_TodoList);
export default TodoList;
