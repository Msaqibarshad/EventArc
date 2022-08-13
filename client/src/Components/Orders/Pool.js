import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hr from "../Hr/Hr";
import "./Css/All-order.css";

const Pool = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [persons, setpersons] = useState("");
  const [parking, setparking] = useState("Parking Availability Yes");

  const [refreshment, setrefreshment] = useState("");
  const [camera, setcamera] = useState("");
  const [swimaccessories, setswimaccessories] = useState("");
  const [snack_cool, setsnack_cool] = useState("");

  const handleclick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      date === "" ||
      time === "" ||
      persons === "" ||
      parking === "" ||
      refreshment === "" ||
      camera === "" ||
      swimaccessories === "" ||
      snack_cool === ""
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
        parking,
        refreshment,
        camera,
        swimaccessories,
        snack_cool,
      };
      fetch("/api/pool", {
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
    var ele = document.getElementsByName("radio16");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio17");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio18");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio19");
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
                min={1}
                placeholder="Enter Number of Persons"
                value={persons}
                onChange={(e) => {
                  setpersons(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input type="text" value={parking} />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Refreshment</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio16"
                    id="one16"
                    value={refreshment}
                    onChange={(e) => {
                      setrefreshment("YES");
                    }}
                  />
                  <label className="label-btn" for="one16">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio16"
                    id="two16"
                    value={refreshment}
                    onChange={(e) => {
                      setrefreshment("NO");
                    }}
                  />
                  <label className="label-btn" for="two16">
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
                    name="radio17"
                    id="one17"
                    value={camera}
                    onChange={(e) => {
                      setcamera("YES");
                    }}
                  />
                  <label className="label-btn" for="one17">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio17"
                    id="two17"
                    value={camera}
                    onChange={(e) => {
                      setcamera("NO");
                    }}
                  />
                  <label className="label-btn" for="two17">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Swimming Accessories</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio18"
                    id="one18"
                    value={swimaccessories}
                    onChange={(e) => {
                      setswimaccessories("YES");
                    }}
                  />
                  <label className="label-btn" for="one18">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio18"
                    id="two18"
                    value={swimaccessories}
                    onChange={(e) => {
                      setswimaccessories("NO");
                    }}
                  />
                  <label className="label-btn" for="two18">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Snacks/ Cool Drinks</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio19"
                    id="one19"
                    value={snack_cool}
                    onChange={(e) => {
                      setsnack_cool("YES");
                    }}
                  />
                  <label className="label-btn" for="one19">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio19"
                    id="two19"
                    value={snack_cool}
                    onChange={(e) => {
                      setsnack_cool("NO");
                    }}
                  />
                  <label className="label-btn" for="two19">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">

              <input type="text" value="10 Person Plan" />

            </div>
            <div className="inner-second-sibling-4-birthday">
              <input type="text" value="Parking Availability Yes" />
              
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input type="text" placeholder='Enter Names of Decoration' />
              
            </div>
          </div> */}
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

export default Pool;
