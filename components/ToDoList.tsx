import React from 'react'

import ToDoListItem from './ToDoListItem'

export default  function ToDoList ({todos, onClick})
{
  return (
    <ul>
       {todos.map((item, index) => {
          <ToDoListItem {...item} onClick = {() => onClick(item.text)} /> 
       })}
    </ul>
  )
}