export function addTodo(text: string) {
  return {
    type: "ADD_TODO",
    text: text
  };
}

export function toggleTodo(text: string) {
  return {
    type: "TOGGLE_TODO",
    text: text
  };
}

export function setFilter(text: string) {
  return {
    type: "SET_FILTER",
    visibility: text
  };
}
