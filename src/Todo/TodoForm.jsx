import React from 'react'

const TodoForm = ({setTodos}) => {

    const [todo,setTodo]=React.useState("")

    const handleAddTodo=React.useCallback((e)=>{
        e.preventDefault();
    
        setTodos((prevValue)=>[...prevValue,todo])
        
        setTodo("")
      },[setTodos,todo])

  return (
    <form onSubmit={handleAddTodo} className='todo-form'>
    <input type='text' placeholder='Add todo' value={todo} onChange={(e)=>setTodo(e.target.value)} />
      <button type='submit'>Add todo</button>
</form>
  )
}

export default TodoForm