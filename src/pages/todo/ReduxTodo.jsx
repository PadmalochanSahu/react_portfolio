import React, { useState } from "react";
import "./REduxTodo.scss";
import mountainImg from "./mountains.avif";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  completeTodo,
  editTodo,
  deleteAll
} from "../../store/reducers/todo/todoSlice";
import swal from "sweetalert";

const ReduxTodo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [todo, setTodo] = useState("");
  const [filterTodo, setFilterTodo] = useState("");
  const [isEdit, setIsEdit] = useState(null)
  const [save, setSave] = useState("Add")
  const dispatch = useDispatch();

  const handleAdd = (item) => {

    setSave("Add")
    if (save === "Add"){
    if (todo === "") {
      swal("Oops!", "Please Enter a Todo!", "error");
    } else if (todos.find((element) => element.name === todo.toLowerCase())) {
      swal("Oops!", "Todo Already Exist!", "error");
      setTodo("");
    } else {
      dispatch(addTodo({ id: 2, name: todo.toLowerCase(), completed: "active" }));
      setTodo("");
    }
  }else{
    dispatch(editTodo({...isEdit, name:todo}))
    setTodo("")
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
  const handleEdit = (id) => {
    let element = todos.filter((item) => {
      return  item.id === id
    })
    setIsEdit(element[0])
    setTodo(element[0].name)
    setSave("Save")
    // setTodo("")
  }
  const handleComplete = (index) => {
    dispatch(completeTodo(index));
  };
  const handleAll = () => {
    setFilterTodo("all");
  };
  const handleActive = () => {
    setFilterTodo("active");
  };
  const handleCompleted = () => {
    setFilterTodo("complete");
  };
  const handleAllDelete = () => {
    dispatch(deleteAll());
  };

  const getTodo = () => {
    let todolist = todos;
    if (filterTodo === "complete" || filterTodo === "active" ) {
      todolist = todolist.filter((item) => {
        return item.completed === filterTodo;
      });
    }
    return todolist.map((item, index) => {
      return (
        <div className="todo" key={index}>
          <div className="one">
            <input type="checkbox" onChange={() => handleComplete(index)} checked={item.completed === "complete"} />
            <p
              className="task"
              style={
                todolist[index].completed === "complete"
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
             {item.name}
            </p>
          </div>
          <div className="two">
          <i className="fa-solid fa-pen-to-square" onClick={() => handleEdit(item.id)}></i>
            <i
              className="fa-sharp fa-solid fa-circle-xmark"
              onClick={() => handleDelete(index)}
            ></i>
          </div>
        </div>
      );
    });
  };

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
              {save}
            </button>
          </div>
          <div className="todo-task">
            {getTodo()}
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
                <button className="btN" onClick={handleAllDelete}>
                  Clear All
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReduxTodo;
