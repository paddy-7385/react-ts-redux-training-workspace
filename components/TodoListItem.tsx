import React from 'react'

export default  function TodoListItem ({text,completed,onClick})
{  
  return (
    <li onClick = {onClick} 
        style = {{textDecoration : completed ? 'line-through' : 'none', color: completed ? 'green' : 'red'}}>
      <div>
        {text}
      </div>
    </li>
  )
}