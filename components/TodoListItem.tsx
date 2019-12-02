import React from 'react'

export default  function ToDoListItem ({text,completed,onClick})
{
  return (
    <li onClick = {onClick} 
        style = {{textDecoration : completed ? 'line-through' : 'none' }}>
      <div>
        {text}
      </div>
    </li>
  )
}