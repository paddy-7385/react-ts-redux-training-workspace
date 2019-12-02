import React from 'react'

export default function AddToDo({onClickAdd}){
  let inputHandler;
  return (
    <div>
      <form
        onSubmit = {e => {
          e.preventDefault();
          if(!inputHandler.value.trim()){
            return;
          }
          else{
            onClickAdd(inputHandler.value);
            inputHandler.value = "";
          }
        }}
       >
        <input type="text" ref={node => { inputHandler =  node}}/>
        <button type= "submit">Add</button>
      </form>
    </div>
  );
}