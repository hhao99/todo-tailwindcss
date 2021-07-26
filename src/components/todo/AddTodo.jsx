import React, {useContext, useState} from 'react'
import { observer } from 'mobx-react-lite'
import TodoContext from './TodoContext'
const AddTodo = observer(()=> {
  const { todoStore, todoListStore } = useContext(TodoContext)
  const { add, todos} = todoListStore
  
  return (
    <div className='pt-4 mx-auto rounded-lg '>
      <form
        onSubmit={ e=> {
          e.preventDefault()
          add({
            id: todos.length,
            task: todoStore.todo.task,
            done: false
          })
          todoStore.todo.task = ''
        }}
      >

        <label htmlfor='task'>New Task: </label>
        <input 
          className=''
          value={todoStore.todo.task}
          onChange={e=> todoStore.todo.task = e.target.value }
          />
      </form>
    </div>
  )
})

export default AddTodo