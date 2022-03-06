import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandle = () => {
        
        // to setState pošleme nove filtrovane pole (aby sa tam nenachadzal objekt ktorý obsahuje kliknute id)
        setTodos(todos.filter( el => el.id !== todo.id ))
    }

    // zmení hodnotu completed na opačnú true or false
    // change value completed true/false 
    const completeHandler = () => {
        setTodos(todos.map((item) => {
          if(item.id === todo.id) {
              return {
                  ...item, completed: !item.completed
              }
            }
            return item; 
        }))
    }


    return (
        <div className="todo">
            
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className={`complete-btn ${todo.completed ? "blue" : ""}`}>
                <i className={`fas fa-check ${todo.completed ? "blue" : ""}`}></i>
            </button>
            <button onClick={deleteHandle} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
            
        </div>
    );
};

export default Todo;