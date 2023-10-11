import React  from 'react'

import "./Todo.css";
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const Todo = ({credit}) => {


  const [todosArr,setTodosArr]=React.useState([])

  let isCustomerCredit=React.useMemo(()=>credit.type==="ISTEHLAK",[credit.type]);





 


  return (
    <main className='todo-container' >
      <p>{isCustomerCredit && 'ISTEHLAK'}</p>
     <TodoForm setTodos={setTodosArr} />
     <TodoList todos={todosArr} setTodosArr={setTodosArr}/>
    </main>
  )
}

export default Todo



