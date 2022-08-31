import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Hr from "../Hr/Hr";
import "./Css/All-order.css";

const Wedding = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [persons, setpersons] = useState("");
  const [bitems, setbitems] = useState("");
  const [ditems, setditems] = useState("");
  const [stagechtype, setstagechtype] = useState("");
  const [dcolor, setdcolor] = useState("");
  const [parking, setparking] = useState("Parking Availability Yes");

  const [dj, setdj] = useState("");
  const [fireworks, setfireworks] = useState("");
  const [otherdec, setotherdec] = useState("");

  const handleclick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      date === "" ||
      time === "" ||
      persons === "" ||
      bitems === "" ||
      ditems === "" ||
      stagechtype === "" ||
      dcolor === "" ||
      parking === "" ||
      dj === "" ||
      fireworks === "" ||
      otherdec === ""
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
        date,
        time,
        persons,
        fireworks,
        bitems,
        dj,
        ditems,
        stagechtype,
        parking,
        dcolor,
        otherdec,
      };
      fetch("/api/wedding", {
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
    setbitems("");
    setditems("");
    // setparking("");
    setstagechtype("");
    setdcolor("");
    var ele = document.getElementsByName("radio24");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio25");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio26");
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
                min={1}
                placeholder="Enter Number of Persons"
                value={persons}
                onChange={(e) => {
                  setpersons(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Your Buffet Items"
                value={bitems}
                onChange={(e) => {
                  setbitems(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Stage Decoration items"
                value={ditems}
                onChange={(e) => {
                  setditems(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Stage/Chair Type"
                value={stagechtype}
                onChange={(e) => {
                  setstagechtype(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input
                type="text"
                placeholder="Enter Decoration Color"
                value={dcolor}
                onChange={(e) => {
                  setdcolor(e.target.value);
                }}
              />
            </div>
            <div className="inner-second-sibling-4-birthday">
              <input type="text" value={parking} />
            </div>
          </div>
          <div className="inner-second-child-4-birthday">
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>DJ Setup</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio24"
                    id="one24"
                    value={dj}
                    onChange={(e) => {
                      setdj("YES");
                    }}
                  />
                  <label className="label-btn" for="one24">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio24"
                    id="two24"
                    value={dj}
                    onChange={(e) => {
                      setdj("NO");
                    }}
                  />
                  <label className="label-btn" for="two24">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Fire Works</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio25"
                    id="one25"
                    value={fireworks}
                    onChange={(e) => {
                      setfireworks("YES");
                    }}
                  />
                  <label className="label-btn" for="one25">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio25"
                    id="two25"
                    value={fireworks}
                    onChange={(e) => {
                      setfireworks("NO");
                    }}
                  />
                  <label className="label-btn" for="two25">
                    <i class="far fa-times-circle"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className="inner-second-sibling-4-birthday">
              <div className="in">
                <label>Other Decorations</label>
                <div class="radio_container">
                  <input
                    type="radio"
                    name="radio26"
                    id="one26"
                    value={otherdec}
                    onChange={(e) => {
                      setotherdec("YES");
                    }}
                  />
                  <label className="label-btn" for="one26">
                    <i class="far fa-check-circle"></i>
                  </label>
                  <input
                    type="radio"
                    name="radio26"
                    id="two26"
                    value={otherdec}
                    onChange={(e) => {
                      setotherdec("NO");
                    }}
                  />
                  <label className="label-btn" for="two26">
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

export default Wedding;
