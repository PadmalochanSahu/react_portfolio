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
            completed : "active"
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
            let newStatus = state.todos[action.payload].completed
            console.log(newStatus);
            if(newStatus === "active")
            state.todos[action.payload].completed = "complete";
            else{
                state.todos[action.payload].completed = "active"
            }
        },
        editTodo: (state, action) => {
            let newTodo = action.payload;
               let index = state.todos.findIndex((element) => {
                   return element.id === newTodo.id
                })
                state.todos[index].name= newTodo.name;
            },

        deleteAll : (state,action) => {
            state.todos.length = 0
        }
    }

})
export const { addTodo, deleteTodo, completeTodo, editTodo, deleteAll} = todoSlice.actions;
export default todoSlice.reducer;