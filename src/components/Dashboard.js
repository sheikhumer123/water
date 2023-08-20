import React from "react";
import "./Dashboard.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Dashboard = () => {
  return (
    <>
      <div className="text-center py-4 test">Todo APP in PHP</div>
      <div className="todo_add_container mx-auto mt-2">
        <input className="form-control add_inp mx-auto" />
        <button className="btn  add_btn mx-auto">Add</button>
      </div>
      <div className="task_list_container mx-auto">
        <ul>
          <li className="task_li mt-3">
            <div className="d-flex">
              <CheckCircleIcon sx={{ color: "rgb(94, 0, 184)" }} />
              <p className="li_p">asdasdasdasdasdasdasd</p>
            </div>

            <div>
              <EditIcon sx={{ color: "rgb(115,115,115)" }} />
              <DeleteIcon sx={{ color: "rgb(115,115,115)" }} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Dashboard;
