import React, {FormEventHandler, FormHTMLAttributes, useState} from 'react'
type TodoType = {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
} 

type addTodoProps = {
  task: TodoType;
  editTodo: (id: string, value: string) => void
}

export const EditTodoForm = ({editTodo, task}: addTodoProps) => {
  const [value, setValue] = useState<string>(task.task)

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='Update task?' value={value} onChange={handleChange}/>
    <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
