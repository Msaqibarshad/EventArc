import React from "react";
import Hr from "../Hr/Hr";
import {NavLink} from "react-router-dom";
import "./Css/All-order.css";
import birth from "../Services/Images/New Images/birthday.png";
import dance from "../Services/Images/New Images/dance.png";
import hybrid from "../Services/Images/New Images/hybrid.png";
import meeting from "../Services/Images/New Images/meeting.png";
import photo from "../Services/Images/New Images/photography.png";
import pool from "../Services/Images/New Images/pool.png";
import wedding from "../Services/Images/New Images/wedding.png";
import custom from "../Services/Images/New Images/customization.png";
import back from "../Services/Images/New Images/back1.png";

const MainOrder = () => {
  return (
    <div>
      <div className="main-4-all-orders  py-3">
        <div className="container ">
          <p className="text-center h1-4-allorders">
            Select Your Event For Setup
          </p>
          <Hr />

          <div className="row mt-5">
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
              <div className="orderbtns">
                <NavLink exact to="/birthday">

                
              <a  href="">
                Birthday
                <img className="customimg" src={birth} alt=""  />
              </a>
              </NavLink>
              </div>
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
            <div className="orderbtns">
              <NavLink exact to="/wedding">
              <a  href="">
                Wedding
                <img className="customimg" src={wedding} alt="" />
              </a>
              </NavLink>
              
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
              <div className="orderbtns">
                <NavLink exact to="/photo">
                <a  href="">
                Photography
                <img className="customimg" src={photo} alt="" />
              </a>
                </NavLink>
              
              </div>
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
            <div className="orderbtns">
            <NavLink exact to="/meeting">
            <a  href="">
                Metting 
                <img className="customimg" src={meeting} alt="" />
              </a>
            </NavLink>
              
              </div>
            </div>
          </div>


          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
              <div className="orderbtns">
                <NavLink exact to="/pool">
                <a  href="">
                Pool Party
                <img className="customimg" src={pool} alt="" />
              </a>
                </NavLink>
              
              </div>
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
            <div className="orderbtns">
              <NavLink exact to="party">
              <a  href="">
                Party
                <img className="customimg" src={dance} alt="" />
              </a>
              </NavLink>
              
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
              <div className="orderbtns">
                <NavLink exact to="/hybrid">
                <a  href="">
                Hybrid Setup
                <img className="customimg" src={hybrid} alt="" />
              </a>

                </NavLink>
              
              </div>
              
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 allcolsforcenter">
            <div className="orderbtns">
              <NavLink exact to="/customize">
              <a  href="" >
                Customized Setup
                <img className="customimg" src={custom} alt="" />
              </a>
              </NavLink>
              
              </div>
            </div>
          </div>

          

        </div>
        <div className=" orbtn ">
              <NavLink exact to="/">
              <a  href="" >
                Back 
                <img className="customimg" src={back} alt="" />
              </a>
              </NavLink>
              
              </div>
      </div>
    </div>
  );
};

export default MainOrder;
