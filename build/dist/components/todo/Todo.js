import React, {useContext} from "../../../_snowpack/pkg/react.js";
import {observer} from "../../../_snowpack/pkg/mobx-react-lite.js";
import TodoContext from "./TodoContext.js";
const _Todo = ({todo, index}) => {
  const {todoListStore} = useContext(TodoContext);
  const {toggle} = todoListStore;
  return /* @__PURE__ */ React.createElement("div", {
    className: "pt-2 mt-2 item-center bg-grey-600 rounded-lg shadow-2xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "pt-1 text-grey-900"
  }, index, " - "), /* @__PURE__ */ React.createElement("span", {
    className: "text-indigo-900 hover:text-red-400",
    onClick: (e) => {
      toggle(index);
    }
  }, todo.task));
};
const Todo = observer(_Todo);
export default Todo;
