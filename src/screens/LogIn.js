import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../components/axios";
import MainContext from "../MainContext";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const { fncsetUser } = useContext(MainContext);
  const [user, setUser] = useState({
    email: "test4@gmail.com",
    password: "Pakistan123@",
  });

  const login = async (e) => {
    e.preventDefault();
    const rep = await axios.post("/login", user);
    fncsetUser(rep.data.user);
    if (rep.status === 200) {
      navigate("/dashboard");
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
          logIn Todo
        </h1>
        <div
          className="mx-auto  "
          style={{
            width: "30%",
            marginTop: 100,
            padding: 50,
          }}
        >
          <form>
            <div className="form-group">
              <label style={{ color: "rgb(94, 0, 184)", fontWeight: 600 }}>
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
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
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "center",
                display: "flex",
                flexDirection: "row",
                padding: 5,
              }}
            >
              <button
                onClick={login}
                style={{
                  backgroundColor: " rgb(94, 0, 184)",
                  border: "none",
                  color: " white",
                }}
                type="submit"
                className="btn"
              >
                Login
              </button>
              <Link to={"/signup"}>
                <p href="/" style={{ color: "rgb(94, 0, 184)" }}></p>
                create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LogIn;
