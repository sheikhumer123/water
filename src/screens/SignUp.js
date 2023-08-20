import axios from "axios";

import React, { useState } from "react";
const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const add_user = (e) => {
    console.log(user);
    e.preventDefault();
    axios.post("http://localhost/signup/", user).then(function (response) {
      console.log(response.data);
    });
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
              onChange={(e) => setUser({ ...user, username: e.target.value })}
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
              placeholder="Password"
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
