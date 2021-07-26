import React , { useContext }from 'react'
import { observer } from 'mobx-react-lite'
import TodoContext from './TodoContext'


const _Todo = ({todo,index})=> {
  const { todoListStore } = useContext(TodoContext)
  const { toggle } = todoListStore
  return (
    <div 
      className='pt-2 mt-2 item-center bg-grey-600 rounded-lg shadow-2xl'>
      <span className='pt-1 text-grey-900'>{index} - </span>
      <span className='text-indigo-900 hover:text-red-400'
        onClick={e=> {
          toggle(index)
        }}
      >{todo.task}</span>
    </div>
  )
}

const Todo = observer(_Todo)

export default Todo