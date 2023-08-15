import React from "react";
import { useDispatch } from "react-redux";
import { login,logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: "Chakravarthy",
              age: 24,
              email: "chakravarthy@gmail.com",
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
              name: "Chakravarthy",
              age: 24,
              email: "chakravarthy@gamil.com",
            })
          );
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Login;
