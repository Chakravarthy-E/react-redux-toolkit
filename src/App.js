import React from "react";
import Profile from "./components/Profile";
import Login from "./components/Login";
import ChangeColor from "./components/ChangeColor";
import { useSelector } from "react-redux/es/hooks/useSelector";
import CounterFn from "./components/CounterFn";

const App = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <div
        style={{
          backgroundColor: theme,
          height: "100vh",
        }}
      >
        <Profile />
        <Login />
        <ChangeColor />
        <CounterFn />
      </div>
    </>
  );
};

export default App;
