import React from "react";
import { Link } from "react-router-dom";

const logIn = () => {
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
              <Link to={"SignUp"}>
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
export default logIn;
