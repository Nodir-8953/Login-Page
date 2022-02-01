import React from "react";
import "./Main.css";
import Form from "../Form/Form";

function Main() {
  return (
    <div className="Main">
      <div className="title-form">
        <img src={require('../../img/Logo.png')} />
      </div>
      <Form />
    </div>
  );
}
export default Main;
