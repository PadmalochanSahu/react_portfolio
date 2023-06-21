import React, { useState } from "react";
import "./REduxTodo.scss";
import mountainImg from "./mountains.avif";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  completeTodo
} from "../../store/reducers/todo/todoSlice";
import swal from "sweetalert";


const ReduxTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");
  const [filterTodo, setFilterTodo] = useState(false);
  const dispatch = useDispatch();


  const handleAdd = () => {
    if (todo === "") {
      swal("Oops!", "Please Enter a Todo!", "error");
    } else if (todos.includes(todo)) {
      swal("Oops!", "Todo Already Exist!", "error");
      setTodo("");
    } else {
      dispatch(addTodo({ id: 2, name: todo, completed: false }));
      setTodo("");
    }
  };
  const handleDelete = (index) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Todo!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your Todo has been deleted!", {
          icon: "success",
        });
        dispatch(deleteTodo(index));
      } else {
        swal("Your Todo is safe!");
      }
    });
  };
  const handleComplete = (index) => {
    dispatch(completeTodo(index));
  };
  const handleAll = () => {
    setFilterTodo(false)
  };
  const handleActive = () => {
    setFilterTodo(false)

  };
  const handleCompleted = () => {
    setFilterTodo(true)
  };

    
  const getTodo = (index) => {
    let todolist = todos;
    console.log("todolist",todolist);

    if (filterTodo) {
      todolist = todolist.filter((item) => {return (item.completed === filterTodo)})
    }
    return todolist.map((item, index) => {
      return (
        <div className="todo" key={index}>
          <div className="one">
            <input
              type="checkbox"
              onChange={() => handleComplete(index)}
            />
            <p className="task" style={(todos[index].completed) === true ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{item.name}</p>
          </div>
          <div className="two">
            <i
              className="fa-sharp fa-solid fa-circle-xmark"
              onClick={() => handleDelete(index)}
            ></i>
          </div>
        </div>
      );
    })} 
    


return (
  <div className="main">
    <section className="bkground">
      <img src={mountainImg} alt="back" />
      <div className="overlay"></div>
    </section>
    <section className="secondbckg">
      <div className="todos">
        <div className="head">
          <h1>Todo</h1>
        </div>
        <div className="add-todo">
          <input
            type="text"
            placeholder="Add Todo"
            className="add-input"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btnAdd" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="todo-task">
          { getTodo()}
          <hr />
          <div className="buttons">
            <div className="total-todo">
              <p>{todos.length} todo's left</p>
            </div>
            <div className="btn-all">
              <button className="btN" onClick={handleAll}>
                All
              </button>
              <button className="btN" onClick={handleActive}>
                Active
              </button>
              <button className="btN" onClick={handleCompleted}>
                Completed
              </button>
            </div>
            <div className="delete-all">
              <button className="btN">Clear All</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default ReduxTodo;
