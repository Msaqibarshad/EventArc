import React from "react";
import { NavLink } from "react-router-dom";
import Hr from "../Hr/Hr";
import "./Css/All-order.css";
import cake from '../Services/Images/New Images/birthday.png';
import wedd from '../Services/Images/New Images/wedding.png';
import party from '../Services/Images/New Images/dance.png';
import back from '../Services/Images/New Images/back1.png';
// import { NavLink } from "react-router-dom";


const Customized = () => {
  return (
    <div>
      <div className="main-4-customization">
        <p className="para-4-customization">
          Here You Can Customize Your Events <br />
          With Your Own Hands
        </p>
        <Hr />

        <NavLink exact to="/beforecustom">
        <div className="child-div-4-customization mt-3">Birthday
        <img className="img-4-own" src={cake} alt="" /></div>
        </NavLink>



        <div className="child-div-4-customization">Wedding <img className="img-4-own" src={wedd} alt="" /></div>
        <div className="child-div-4-customization">Party <img className="img-4-own" src={party
        } alt="" /></div>

        <NavLink className="back4custom" exact to="/allsetups">
        <div className="child-div-4-customization">Back <img className="img-4-own" src={back
        } alt="" /></div>
        </NavLink>

      </div>
    </div>
  );
};

export default Customized;
