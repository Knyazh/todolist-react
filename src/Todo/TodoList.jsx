import React from 'react'

const TodoList = ({todos,setTodosArr}) => {

    const removeItem=(index)=>{

        setTodosArr((prev)=> {
            let newArr=[...prev];
           newArr.splice(index,1)
            return newArr;
        } )
    }

    

  return (
    <ul>
        {todos.map((todo,index)=><li key={index} onClick={()=>removeItem(index)} >{todo}</li>)}
    </ul>
  )
}

export default TodoList