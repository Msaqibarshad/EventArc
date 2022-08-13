import React, { useState } from "react";
import Hr from "../Hr/Hr";
import { NavLink } from "react-router-dom";

import "./Css/All-order.css";

const Meeting = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");


  const [persons, setpersons] = useState("");
  const [water, setwater] = useState("");
  const [drink, setdrink] = useState("");

  const [projector, setprojector] = useState("");
  const [camera, setcamera] = useState("");
  const [stationary, setstationary] = useState("");
  const [table, settable] = useState("");
  const [whiteboard, setwhiteboard] = useState("");
  const [refreshment, setrefreshment] = useState("");

  const handleclick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      date === "" ||
      time === "" ||
      persons === "" ||
      water === "" ||
      drink === "" ||
      projector === "" ||
      camera === "" ||
      stationary === "" ||
      table === "" ||
      whiteboard === "" ||
      refreshment === ""
    ) {
      alert("fill all fields");
    } else if (persons < 1) {
      alert("Person Filed is always greater than 0");
    } else {
      const data = {
        name,
        number,
        email,
        address,
        persons,
        water,
        drink,
        projector,
        camera,
        stationary,
        table,
        whiteboard,
        refreshment,
      };
      fetch("/api/meeting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log({ res });
          if (res.errors) {
            alert(res.errors[0].msg);
          } else {
            alert(res.success);
            clear();
          }
        })
        .catch((err) => {
          console.log({ err });
          alert("Error while get data from API", err);
        });
    }
  };

  const clear = () => {
    setname("");
    setnumber("");
    setemail("");
    setaddress("");
    setdate("");
    settime("");
    setpersons("");
    setwater("");
    setdrink("");
    var ele = document.getElementsByName("radio");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio1");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio2");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio3");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio4");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio5");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
  };
  return (
    <div className="container">
      <div className="inner-div-4-birtday">
        <p className="pt-2 main-para-4-birthday">
          We will take your 1 Min to Setup your Event
        </p>
        <Hr />
        <p>Enter Your Personal Details</p>
        <div className="first-inner-child">
          <div className="sibling-parent-4-birthday">
            <div className="sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter 
Your Full Name...."
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="sibling-4-birthday ">
              <input
                type="number"
                placeholder="Enter Your Mobile Number...."
                value={number}
                onChange={(e) => {
                  setnumber(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="sibling-parent-4-birthday">
            <div className="sibling-4-birthday">
              <input
                type="email"
                placeholder="Enter 
Your Email Address...."
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Your Permanent Address...."
                value={address}
                onChange={(e) => {
                  setaddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="sibling-parent-4-birthday">
              <div className="sibling-4-birthday">
                <input
                
                
                  type="date"
                  value={date}
                  
                  onChange={(e) => {
                    setdate(e.target.value);
                  }}
                />
              </div>
              <div className="sibling-4-birthday">
                <input
                  type="time"
                  value={time}
                  
                  onChange={(e) => {
                    settime(e.target.value);
                  }}
                />
              </div>
              
            </div>
        </div>
        <div className="second-inner-child">
          <p>Enter Your Setup Details</p>

          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <input
                type="number"
                placeholder="Enter Number of Person"
                min="1"
                value={persons}
                onChange={(e) => {
                  setpersons(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Mineral Water Bottles"
                value={water}
                onChange={(e) => {
                  setwater(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Number of Cool Drinks"
                value={drink}
                onChange={(e) => {
                  setdrink(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Projector </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio"
                    id="one"
                    value={projector}
                    onChange={(e) => {
                      setprojector("YES");
                    }}
                  />
                  <label className="label-btn" for="one">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio"
                    id="two"
                    value={projector}
                    onChange={(e) => {
                      setprojector("NO");
                    }}
                  />
                  <label className="label-btn" for="two">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Camera Setup </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio1"
                    id="one1"
                    value={camera}
                    onChange={(e) => {
                      setcamera("YES");
                    }}
                  />
                  <label className="label-btn" for="one1">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio1"
                    id="two1"
                    value={camera}
                    onChange={(e) => {
                      setcamera("NO");
                    }}
                  />
                  <label className="label-btn" for="two1">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Stationary </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio2"
                    id="one2"
                    value={stationary}
                    onChange={(e) => {
                      setstationary("YES");
                    }}
                  />
                  <label className="label-btn" for="one2">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio2"
                    id="two2"
                    value={stationary}
                    onChange={(e) => {
                      setstationary("NO");
                    }}
                  />
                  <label className="label-btn" for="two2">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Table </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio3"
                    id="one3"
                    value={table}
                    onChange={(e) => {
                      settable("YES");
                    }}
                  />
                  <label className="label-btn" for="one3">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio3"
                    id="two3"
                    value={table}
                    onChange={(e) => {
                      settable("NO");
                    }}
                  />
                  <label className="label-btn" for="two3">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>White Board </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio4"
                    id="one4"
                    value={whiteboard}
                    onChange={(e) => {
                      setwhiteboard("YES");
                    }}
                  />
                  <label className="label-btn" for="one4">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio4"
                    id="two4"
                    value={whiteboard}
                    onChange={(e) => {
                      setwhiteboard("NO");
                    }}
                  />
                  <label className="label-btn" for="two4">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Refreshment </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio5"
                    id="one5"
                    value={refreshment}
                    onChange={(e) => {
                      setrefreshment("YES");
                    }}
                  />
                  <label className="label-btn" for="one5">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio5"
                    id="two5"
                    value={refreshment}
                    onChange={(e) => {
                      setrefreshment("No");
                    }}
                  />
                  <label className="label-btn" for="two5">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <NavLink exact to="/allsetups">
                <input
                  className="second-btns-4-birth"
                  type="button"
                  value="Cancel"
                />
              </NavLink>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                className="second-btns-4-birth"
                type="button"
                value="Clear Form"
                onClick={clear}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                className="second-btns-4-birth"
                type="button"
                value="Submit"
                onClick={handleclick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meeting;
