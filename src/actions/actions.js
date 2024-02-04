// ctreating the actions for manipulating the "todos" , "count" , "message",

//actions for todos
export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const toggleTodo = (index) => ({
  type: "Toggle_TODO",
  index: index,
});

// actions for increment
export const increment = () => ({
  type: "INCREMENT",
});

export const decrement = () => ({
  type: "DECREMENT",
});

export const setMessage = (message) => ({
  type: "SET_MESSAGE",
  payload: message,
});
