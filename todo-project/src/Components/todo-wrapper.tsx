import React, {useState} from 'react'
import { TodoForm } from './form'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './todo';
import { EditTodoForm } from './edit-todo';
uuidv4();

type TodoType = {
  id: string
  task: string
  completed: boolean
  isEditing: boolean
}

export const TodoWrapper = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
    console.log(todos);
  }
  const toggleComplete = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
  }

  const editTask = (task: string, id: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
  }

  return (
    <div className='TodoWrapper'>
       <h1>Todo List</h1>
       <a href="https://www.vecteezy.com/free-png/edit-icon">Edit Icon PNGs by Vecteezy</a>
       <a href="https://www.freeiconspng.com/img/28689">Icon Drawing Trash Can</a>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
        
      ))}
    </div>
  )
}
