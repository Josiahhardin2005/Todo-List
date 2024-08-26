import React, {FormEventHandler, FormHTMLAttributes, useState} from 'react'
type TodoType = {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
} 

type addTodoProps = {
  addTodo: (todo: string) => void;
}

export const TodoForm = ({addTodo}: addTodoProps) => {
  const [value, setValue] = useState<string>("")

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(value);

    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' placeholder='what is the task today?' value={value} onChange={handleChange}/>
    <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
