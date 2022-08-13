import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hr from "../Hr/Hr";
import "./Css/All-order.css";

const Photo = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [persons, setpersons] = useState("");
  const [water, setwater] = useState("");
  const [clicks, setclicks] = useState("");

  const [snack, setsnack] = useState("");
  const [drink, setdrink] = useState("");
  const [edited, setedited] = useState("");
  const [indoor, setindoor] = useState("");
  const [outdoor, setoutdoor] = useState("");
  const [both, setboth] = useState("");

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
      clicks === "" ||
      snack === "" ||
      drink === "" ||
      edited === "" ||
      indoor === "" ||
      outdoor === "" ||
      both === ""
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
        clicks,
        snack,
        drink,
        edited,
        indoor,
        outdoor,
        both,
      };
      fetch("/api/photo", {
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
    setclicks("");
    var ele = document.getElementsByName("radio11");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio12");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio13");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio14");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio15");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio16");
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
                placeholder="Enter Number of Persons"
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
                placeholder="Enter Ponuds Of Clicks"
                value={clicks}
                onChange={(e) => {
                  setclicks(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Number of Water Bottles"
                value={water}
                onChange={(e) => {
                  setwater(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Snacks </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio11"
                    id="one11"
                    value={snack}
                    onChange={(e) => {
                      setsnack("YES");
                    }}
                  />
                  <label className="label-btn" for="one11">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio11"
                    id="two11"
                    value={snack}
                    onChange={(e) => {
                      setsnack("NO");
                    }}
                  />
                  <label className="label-btn" for="two11">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Cool Drinks </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio12"
                    id="one12"
                    value={drink}
                    onChange={(e) => {
                      setdrink("YES");
                    }}
                  />
                  <label className="label-btn" for="one12">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio12"
                    id="two12"
                    value={drink}
                    onChange={(e) => {
                      setdrink("NO");
                    }}
                  />
                  <label className="label-btn" for="two12">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Editted Photos </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio16"
                    id="one16"
                    value={edited}
                    onChange={(e) => {
                      setedited("YES");
                    }}
                  />
                  <label className="label-btn" for="one16">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio16"
                    id="two16"
                    value={edited}
                    onChange={(e) => {
                      setedited("NO");
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
                <label>Inoodr Shoot </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio13"
                    id="one13"
                    value={indoor}
                    onChange={(e) => {
                      setindoor("YES");
                    }}
                  />
                  <label className="label-btn" for="one13">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio13"
                    id="two13"
                    value={indoor}
                    onChange={(e) => {
                      setindoor("NO");
                    }}
                  />
                  <label className="label-btn" for="two13">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Outdoor Shoot </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio14"
                    id="one14"
                    value={outdoor}
                    onChange={(e) => {
                      setoutdoor("YES");
                    }}
                  />
                  <label className="label-btn" for="one14">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio14"
                    id="two14"
                    value={outdoor}
                    onChange={(e) => {
                      setoutdoor("NO");
                    }}
                  />
                  <label className="label-btn" for="two14">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Both Shoots </label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio15"
                    id="one15"
                    value={both}
                    onChange={(e) => {
                      setboth("YES");
                    }}
                  />
                  <label className="label-btn" for="one15">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio15"
                    id="two15"
                    value={both}
                    onChange={(e) => {
                      setboth("NO");
                    }}
                  />
                  <label className="label-btn" for="two15">
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

export default Photo;
