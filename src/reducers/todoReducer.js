const initialstate = [{ text: "No-Tasks", completed: false }];

const todosReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { text: action.payload, completed: false }];
    case "TOGGLE_TODO":
      return state.map((todo, index) => {
        return index === action.index
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
    default:
      return state;
  }
};

export default todosReducer;
