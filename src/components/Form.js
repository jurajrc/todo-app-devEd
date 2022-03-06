
import React from 'react';


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    // Here i can write javascipt code and function
    const inputTextHandler = (e) => {
        
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault()
        if(inputText === "") {
            alert("Zadajťe úlohu!!!")
        }else {
            setTodos([
                // rozloží pole todos a pridá nový object
                ...todos, { 
                    text: inputText, 
                    completed: false, 
                    id: Math.round(Math.random() * 1000) }
            ]);
            // deletion value input
            setInputText("")

        }
    }

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }

    return(
        <form>
            <input 
                autoFocus
                value={inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input" 
            />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;