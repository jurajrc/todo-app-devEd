import React, { useState, useEffect } from 'react';
import './App.css';

// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
 
  // state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

   //USE effect

   useEffect(() => {
     // načita z local storage ak nie je null
     getLocalStorage()
   }, [])

   useEffect(() => {
    const filterHandler = () => {
      switch(status) {
        case "completed" :
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted" :
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default: 
          setFilteredTodos(todos);
          break;
      }
    }
    filterHandler()

    // save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
    saveLocalTodos()
  }, [todos, status]) 


  // load localstorage
  const getLocalStorage = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos')));
      
    }
  }



  return (
    <div className="App">
      <header>
        <h1>JurajRC's Todo List</h1>
      </header>
      <Form
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
        />
    </div>
  );
}

export default App;
