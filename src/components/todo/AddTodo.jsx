import React, {useContext, useState} from 'react'
import { observer } from 'mobx-react-lite'
import TodoContext from './TodoContext'
import { v4 as uuid } from 'uuid'

const AddTodo = observer(()=> {
  const { todoStore, todoListStore } = useContext(TodoContext)
  const { add, todos} = todoListStore
  
  return (
    <div className='flex flex-col items-end justify-between space-x-4 bg-lightblue-200 border-b border-grey-200 rouned-lg shadow-2xl'>
      <form
        onSubmit={ e=> {
          e.preventDefault()
          add({
            id: uuid().substr(0,8),
            task: todoStore.todo.task,
            done: false
          })
          todoStore.todo.task = ''
        }}
      >

        <label className='text-sm mx-auto text-steelblue-200 p-2 px-4 py-2' 
        htmlfor='task'>New Task: </label>
        <input 
          className='text-darkblue-400 px-8 py-'
          value={todoStore.todo.task}
          onChange={e=> todoStore.todo.task = e.target.value }
          />
      </form>
    </div>
  )
})

export default AddTodo