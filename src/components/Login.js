import React from "react";
import { useDispatch } from "react-redux";
import { login,logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Chakri",
              age: 24,
              email: "chakri@gamil.com",
            })
          );
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(
            logout({
              name: "Chakri",
              age: 24,
              email: "chakri@gamil.com",
            })
          );
        }}
      >
        logout
      </button>
    </>
  );
};

export default Login;
