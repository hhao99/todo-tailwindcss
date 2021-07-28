import React , { useContext }from 'react'
import { observer } from 'mobx-react-lite'
import TodoContext from './TodoContext'


const _Todo = ({todo,index})=> {
  const { todoListStore } = useContext(TodoContext)
  const { toggle, remove } = todoListStore
  return (
    <div 
      className='card-content-profil pt-3 flex justify-between items-center'>
      <span className='text-grey-900'>{todo.id}</span>
      <span className='text-indigo-900 hover:text-red-400'
        onClick={e=> {
          toggle(index)
        }}
      >{todo.task}</span>
      <button onClick={ e=> remove(index) }>X</button>
    </div>
  )
}

const Todo = observer(_Todo)

export default Todo