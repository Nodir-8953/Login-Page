import React from "react";
import { FaBeer } from 'react-icons/fa';
import { Gi3DStairs } from "react-icons/gi";
import "./Form.css";
function Form() {
  var emka = <Gi3DStairs />;
  return (
    <div className="form">
      <div className="line1">
        <div className="line11"></div>
      </div>
      <div className="line2">
        <div className="line21"></div>
      </div>
      <div className="line3">
        <div className="line31"></div>
      </div>
      <div className="line4">
        <div className="line41"></div>
      </div>
      <div className="form-title">
        <div className="form-title-vxod">вход</div>
        <div className="form-title-register">Регистрация</div>
      </div>
      <div className="form-input">
        <input
          type="email"
          name="email"
          className="form-control"
          // value="agro@gmail.com"
          placeholder={emka}
          
        />
        
        <br />
        <input type="password" name="password" className="form-control" />
      </div>
    </div>
  );
}
export default Form;
