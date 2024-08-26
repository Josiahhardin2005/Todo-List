import { useState } from 'react'
import trash from '../assets/trash-can-icon-3.png' 
import pen from '../assets/pen-to-square.png'


type TodoType = {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}

type TodoProps = {
  task: TodoType;
  toggleComplete: (id: string) => void
  deleteTodo: (id: string) => void
  editTodo: (id: string) => void
}

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }: TodoProps) => {
  return(<>
      <div className='Todo'>
          <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
          <div>
              <img src={pen} alt="Edit" width={660} height={400} onClick={() => editTodo(task.id)}/>
              <img src={trash} alt="Delete" width={320} height={320} onClick={() => deleteTodo(task.id)}/>
          </div>
      </div>
    </>
    )
}
