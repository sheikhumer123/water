import React, { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MainContext from "../MainContext";
import Button from "@mui/material/Button";
import axios from "../components/axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(MainContext);
  const [todo, setTodo] = useState({
    main_todo: "",
    created_by: currentUser.email,
  });
  const [newtodo, setNewTodo] = useState("");
  const [todoId, setTodoID] = useState();

  const [alltodo, setAllTodo] = useState([]);
  const logOut = async (e) => {
    e.preventDefault();
    const rep = await axios.post("/logout");
    if (rep.status === 200) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  const get_todo = async () => {
    await axios.post("/getusertodos", todo).then((res) => {
      setAllTodo(res.data.user);
    });
  };

  const get_single_todo = async () => {
    if (todoId) {
      await axios
        .post("/updatetodo", {
          id: todoId,
          created_by: currentUser.email,
          main_todo: newtodo,
        })
        .then((res) => {
          console.log(res.data);
        });
      get_todo();
    }
  };

  const updateTodo = (txt, id) => {
    setTodoID(id);
    setNewTodo(txt);
  };

  const deleteTodo = async (id, val) => {
    if (id) {
      await axios
        .post(`/deletetodo`, {
          id: id,
          created_by: currentUser.email,
          main_todo: val,
        })
        .then((res) => {
          console.log(res.data);
        });
      get_todo();
    }
  };

  const add_todo = async (e) => {
    e.preventDefault();
    if (todo.main_todo) {
      await axios.post("/todos/", todo).then((res) => {});
      get_todo();
      setTodo({ ...todo, main_todo: "" });
    } else {
      alert("some context needed");
    }
  };

  useEffect(() => {
    get_todo();
  }, []);

  return (
    <>
      <div className="text-center py-2 test2">
        <p>{currentUser.name}</p>
        <Button onClick={logOut} variant="contained">
          log Out
        </Button>
      </div>
      <div className="text-center py-4 test">Todo APP in PHP</div>
      <div className="todo_add_container mx-auto mt-2">
        <input
          value={todo.main_todo}
          className="form-control add_inp mx-auto"
          onChange={(e) => setTodo({ ...todo, main_todo: e.target.value })}
        />
        <button onClick={add_todo} className="btn  add_btn mx-auto">
          Add
        </button>
      </div>
      <div className="task_list_container mx-auto">
        <ul>
          {alltodo.map((todo, index) => (
            <li key={index} className="task_li mt-3">
              <div className="d-flex">
                <CheckCircleIcon sx={{ color: "rgb(94, 0, 184)" }} />

                <p className="li_p">{todo.main_todo}</p>
              </div>

              <div>
                <button
                  onClick={() => updateTodo(todo.main_todo, todo.id)}
                  className="btn"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <EditIcon
                    sx={{ color: "rgb(115,115,115)", marginRight: 5 }}
                  />
                </button>

                <DeleteIcon
                  onClick={() => deleteTodo(todo.id, todo.main_todo)}
                  sx={{ color: "rgb(115,115,115)" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Update TODO
              </h5>
              <button
                type="button"
                className="close btn"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                value={newtodo}
                className="form-control add_inp mx-auto"
                onChange={(e) => setNewTodo(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                onClick={() => get_single_todo()}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
