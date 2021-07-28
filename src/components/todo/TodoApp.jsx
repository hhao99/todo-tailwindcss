import React from 'react'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

import TodoContext from './TodoContext'
import { todoStore,todoListStore } from '../../store/TodoStore'

const TodoApp = ()=> {
  return (
    <div className='flex flex-col mt-10'>
      <TodoContext.Provider value={{todoStore,todoListStore}} >
        <h3 className='text-xl text-blue-800'>
          Todo App!!
        </h3>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  )
}

export default TodoApp