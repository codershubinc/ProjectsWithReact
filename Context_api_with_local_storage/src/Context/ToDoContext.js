import {  createContext ,useContext } from "react";
export const ToDoContext = createContext({

todos:[
    {
        id: 1,
        title: "Learn React",
        completed: false
    }
],

addTodo: () => {},
updateTodo: () => {},
deleteTodo: () => {},
toggleComplete: () => {},


});

export const useToDoContext = () => {
    return useContext(ToDoContext);
}

export const TodoProvider = ToDoContext.Provider                    