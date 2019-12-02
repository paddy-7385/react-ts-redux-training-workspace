import React from 'react'

import TodoListItem from './TodoListItem'

export default function TodoList ({todos, onClick})
{
  return (
    <ul>
       {todos.map((item, index) => {
          <TodoListItem {...item} onClick = {() => onClick(item.text)} /> 
       })}
    </ul>
  )
}