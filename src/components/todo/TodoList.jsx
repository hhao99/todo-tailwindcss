import React, {useContext} from 'react'

import { observer } from 'mobx-react-lite'
import TodoContext from './TodoContext'
import Todo from './Todo'
const _TodoList = ()=> {
  const { todoListStore } = useContext(TodoContext)
  const { todos } = todoListStore
  return (
    <div className='inline:flex bg-grey-300'>
       <ul>{ todos.length === 0 ? 'no' : 
        todos.map( (todo,index) => <Todo key={todo.id} index={index} todo={todo}/>)
      }</ul>     
    </div>
  )
}
const TodoList = observer(_TodoList)

export default TodoList