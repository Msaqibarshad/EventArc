import React, { useState } from "react";
import Hr from "../Hr/Hr";
import { NavLink } from "react-router-dom";

import "./Css/All-order.css";

const Party = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [persons, setpersons] = useState("");
  const [pizza, setpizza] = useState("");
  const [burger, setburger] = useState("");
  const [parking, setparking] = useState("Parking Availability Yes");

  const [snack_cool, setsnack_cool] = useState("");
  const [dj, setdj] = useState("");
  const [camera, setcamera] = useState("");
  const [decoration, setdecoration] = useState("");
  const [pool, setpool] = useState("");

  const handleclick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      date === "" ||
      time === "" ||
      persons === "" ||
      pizza === "" ||
      burger === "" ||
      snack_cool === "" ||
      dj === "" ||
      camera === "" ||
      decoration === "" ||
      pool === ""
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
        pizza,
        burger,
        parking,
        snack_cool,
        dj,
        camera,
        decoration,
        pool,
      };
      fetch("/api/party", {
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
    setpizza("");
    setburger("");
    var ele = document.getElementsByName("radio19");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio20");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio21");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio22");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio23");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    // setparking("");
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
                min={1}
                value={persons}
                onChange={(e) => {
                  setpersons(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Number Of Pizza"
                value={pizza}
                onChange={(e) => {
                  setpizza(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Number of Burgers"
                value={burger}
                onChange={(e) => {
                  setburger(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <input type="text" value={parking} />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Snacks/ Cool Drinks</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio20"
                    id="one20"
                    value={snack_cool}
                    onChange={() => {
                      setsnack_cool("YES");
                    }}
                  />
                  <label className="label-btn" for="one20">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio20"
                    id="two20"
                    value={snack_cool}
                    onChange={() => {
                      setsnack_cool("NO");
                    }}
                  />
                  <label className="label-btn" for="two20">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>DJ Setup</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio19"
                    id="one19"
                    value={dj}
                    onChange={() => {
                      setdj("YES");
                    }}
                  />
                  <label className="label-btn" for="one19">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio19"
                    id="two19"
                    value={dj}
                    onChange={() => {
                      setdj("NO");
                    }}
                  />
                  <label className="label-btn" for="two19">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Camera Man</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio21"
                    id="one21"
                    value={camera}
                    onChange={() => {
                      setcamera("YES");
                    }}
                  />
                  <label className="label-btn" for="one21">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio21"
                    id="two21"
                    value={camera}
                    onChange={() => {
                      setcamera("NO");
                    }}
                  />
                  <label className="label-btn" for="two21">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Decoration</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio22"
                    id="one22"
                    value={decoration}
                    onChange={() => {
                      setdecoration("YES");
                    }}
                  />
                  <label className="label-btn" for="one22">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio22"
                    id="two22"
                    value={decoration}
                    onChange={() => {
                      setdecoration("NO");
                    }}
                  />
                  <label className="label-btn" for="two22">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Pool</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio23"
                    id="one23"
                    value={pool}
                    onChange={() => {
                      setpool("YES");
                    }}
                  />
                  <label className="label-btn" for="one23">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio23"
                    id="two23"
                    value={pool}
                    onChange={() => {
                      setpool("NO");
                    }}
                  />
                  <label className="label-btn" for="two23">
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

export default Party;
