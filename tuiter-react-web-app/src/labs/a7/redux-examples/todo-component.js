import React, { useState } from "react";
import {useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector((state) => state.todos);

    const [todo, setTodo] = useState({do: ''});

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue,
        }
        setTodo(newTodo);
    }    

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map(todo => 
                        <li className="list-group-item" key={todo.do}>
                            <input 
                                onChange={todoChangeHandler}
                                value={todo.do}
                                className="form-control"/>
                        </li>)
                }   
            </ul>
        </>
    );
};

export default Todos;
