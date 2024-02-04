import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo } from "./actions/actions";

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  // Corrected: Only set input value here
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Dispatch addTodo action on form submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue)); // Assuming addTodo is correctly set up to handle this action
      setInputValue(""); // Clear input field after submission
    }
  };

  // Retrieve todos from Redux store
  const todos = useSelector((state) => state.todos);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li> // Display each todo item
        ))}
      </ul>
    </div>
  );
}

export default App;
