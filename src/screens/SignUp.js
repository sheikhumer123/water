import React, { useState } from "react";
import axios from "../components/axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [confirmPass, setConfirmPass] = useState("Pakistan123@");
  const [user, setUser] = useState({
    name: "test4",
    email: "test4@gmail.com",
    password: "Pakistan123@",
  });
  const add_user = async (e) => {
    e.preventDefault();
    if (user.password === confirmPass) {
      await axios.post("/register", user);
      navigate("/login");
    } else {
      alert("Password has to be matched");
    }
  };
  return (
    <>
      <div>
        <h1
          style={{
            backgroundColor: "rgb(94, 0, 184)",
            color: "white",
            padding: 20,
          }}
          className="text-center "
        >
          SignUp Todo
        </h1>
        <div
          className="mx-auto  "
          style={{
            width: "30%",
            marginTop: 100,
            padding: 50,
          }}
        >
          <div className="form-group">
            <label style={{ color: "rgb(94, 0, 184)", fontWeight: 600 }}>
              User Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label style={{ color: "rgb(94, 0, 184)", fontWeight: 600 }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail3"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label style={{ color: "rgb(94, 0, 184)", fontWeight: 600 }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
            />
          </div>
          <div className="form-group">
            <label style={{ color: "rgb(94, 0, 184)", fontWeight: 600 }}>
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label
              style={{ color: "rgb(115,115,115)", fontSize: 14 }}
              className="form-check-label"
            >
              i accept the terms and conditions
            </label>
          </div>
          <button
            onClick={add_user}
            style={{
              backgroundColor: " rgb(94, 0, 184)",
              border: "none",
              color: " white",
            }}
            className="btn  mt-4"
          >
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
