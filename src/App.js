import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";

// import ContactBooks from "./components/ContactBooks";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
// import FormTodo from "./components/FormTodo";
// import TodoList from "./components/TodoList";
// import Navbar from "./Navbar";
// import Quiz from './Quiz'
// import Form from './Form';
// import SearchFilter from "./SearchFilter";
// import Temperature from "./Temperature";

function App() {
  // const contacts = [
  //   {
  //     avatarUrl:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     name: "John",
  //     surname: "Smith",
  //     email: "john-smith@gmail.com",
  //     age: 34,
  //   },

  //   {
  //     avatarUrl:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     name: "Richard",
  //     surname: "Mark",
  //     email: "richard-mark@gmail.com",
  //     age: 27,
  //   },
  //   {
  //     avatarUrl:
  //       "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  //     name: "Sally",
  //     surname: "Megan",
  //     email: "sally-megan@gmail.com",
  //     age: 25,
  //   },
  // ];

  // State stuff
  // const [inputText, setInputText] = useState("");
  // const [todos, setTodos] = useState([]);
  // const [status, setStatus] = useState("all");
  // const [filteredTodos, setFilteredTodos] = useState([]);

  // RUN ONCE when the app start
  // useEffect(() => {
  //   getLocalTodos();
  // }, []);

  // USE EFFECT
  // useEffect(() => {
  //   filterHandler();
  //   saveLocalStorage();
  // }, [todos, status]);

  // functions
  // const filterHandler = () => {
  //   switch (status) {
  //     case "completed":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === true));
  //       break;
  //     case "uncompleted":
  //       setFilteredTodos(todos.filter((todo) => todo.completed === false));
  //       break;

  //     default:
  //       setFilteredTodos(todos);
  //       break;
  //   }
  // };

  // Save to local storage
  // const saveLocalStorage = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // const getLocalTodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todoLocal = JSON.parse(localStorage.getItem("todos"))
  //     setTodos(todoLocal);
  //   }
  // };

  // ==================FETCH API==============================>>>>>
  // const [results, setResults] = useState([]);

  // useEffect (()=> {
  //   fetch("https://randomuser.me/api/?results=10")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     setResults(data.results)
  //   });

  // },[])

  // const APP_ID = "a39c46a7";
  // const APP_KEY = "2f2abce7f4219005301a1b2d8861eb23—";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(``);
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery();
    setSearch('')
  };

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      {/* <Temperature /> */}
      {/* <SearchFilter/> */}
      {/* <Quiz/> */}
      {/* {/* <Navbar />} */}
      {/* // <Form/> */}
      {/* 
      <LoginButton/>
      <LogoutButton/> */}
      {/* <FormTodo
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      /> */}
      {/* {results.map((result, index) => {
        {/* return (
          <ContactBooks
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            surname={result.name.last}
            email={result.email}
            age={result.dob.age}
          />
        );
      // })} */}{" "}
    </div>
  );
}

export default App;
