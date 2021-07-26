import React, {useContext, useState} from "../../../_snowpack/pkg/react.js";
import {observer} from "../../../_snowpack/pkg/mobx-react-lite.js";
import TodoContext from "./TodoContext.js";
const AddTodo = observer(() => {
  const {todoStore, todoListStore} = useContext(TodoContext);
  const {add, todos} = todoListStore;
  return /* @__PURE__ */ React.createElement("div", {
    className: "pt-4 mx-auto rounded-lg "
  }, /* @__PURE__ */ React.createElement("form", {
    onSubmit: (e) => {
      e.preventDefault();
      add({
        id: todos.length,
        task: todoStore.todo.task,
        done: false
      });
      todoStore.todo.task = "";
    }
  }, /* @__PURE__ */ React.createElement("label", {
    htmlfor: "task"
  }, "New Task: "), /* @__PURE__ */ React.createElement("input", {
    className: "",
    value: todoStore.todo.task,
    onChange: (e) => todoStore.todo.task = e.target.value
  })));
});
export default AddTodo;
