import React from "../../../_snowpack/pkg/react.js";
import TodoList from "./TodoList.js";
import AddTodo from "./AddTodo.js";
import TodoContext from "./TodoContext.js";
import {todoStore, todoListStore} from "../../store/TodoStore.js";
const TodoApp = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "max-w-sm mx-auto p-4 bg-grey-200 rounded-lg shadow-xl"
  }, /* @__PURE__ */ React.createElement(TodoContext.Provider, {
    value: {todoStore, todoListStore}
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-xl text-blue-800"
  }, "Todo App with MobX"), /* @__PURE__ */ React.createElement(AddTodo, null), /* @__PURE__ */ React.createElement(TodoList, null)));
};
export default TodoApp;
