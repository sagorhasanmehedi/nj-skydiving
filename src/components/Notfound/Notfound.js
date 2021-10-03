import React from "react";
import { useHistory } from "react-router";
import "./Notfound.css";

const Notfound = () => {
  const histroy = useHistory();
  const gohome = () => {
    histroy.push("/home");
  };
  return (
    <div className="page-notfound ">
      <h1>404 !</h1>
      <h4>PAGE NOT FOUND</h4>
      <button onClick={gohome} className="go-home">
        HOME
      </button>
    </div>
  );
};

export default Notfound;
