import React from 'react'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

import TodoContext from './TodoContext'
import { todoStore,todoListStore } from '../../store/TodoStore'

const TodoApp = ()=> {
  return (
    <div className='max-w-sm mx-auto p-4 bg-grey-200 rounded-lg shadow-xl'>
      <TodoContext.Provider value={{todoStore,todoListStore}} >
        <h3 className='text-xl text-blue-800'>
          Todo App with MobX
        </h3>
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </div>
  )
}

export default TodoApp