import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    todos: []
}
const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const newTodo = {
            id : Date.now(),
            name : action.payload.name,
            completed : false
            }
           state.todos.push(newTodo)
        },
        deleteTodo: (state, action) => {
            const newTodos = state.todos.filter((state, index) => {
                return index !== action.payload
            }) ;
            state.todos = newTodos;
        },
        completeTodo: (state,action) => {
            let newStatus = state.todos[action.payload].completed; 
            state.todos[action.payload].completed = !newStatus;

            if(!newStatus){
                const completedTodos = state.todos.filter((state,index) => {
                    return index === action.payload;
                })
            }
        }
    }

})
export const { addTodo, deleteTodo, completeTodo} = todoSlice.actions;
export default todoSlice.reducer;