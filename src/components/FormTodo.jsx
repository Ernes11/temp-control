import React from "react";
import "./formTodo.css";

const FormTodo = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // Here write javascript code and function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  };

  return (
    <>
      <h1 className="form-title">Todo List</h1>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          <i className="fas fa-plus-square">+</i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" id="" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default FormTodo;
