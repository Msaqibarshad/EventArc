import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./Customize.css";

const BeforeCustom = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const history = useHistory();

  const handleClick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      time === "" ||
      date === ""
    ) {
      alert("Please Fill Out All Fields")


    } else {
      const data = {
        name,
        number,
        email,
        address,
        date,
        time,
      };
      fetch("/api/beforecustom", {
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
            // history.push("/dashboard");
          }
        })
        .catch((err) => {
          console.log({ err });
          alert("Error while get data from API", err);
        });
      // alert("done");
    }
  };

  const clear = () => {
    setname("");
    setnumber("");
    setemail("");
    setaddress("");
    setdate("");
    settime("");
  };

  return (
    <div className="mian_for_before_custom">
      <h3>
        We will take your one minute ot enter your Personal Details and then
        move next.
      </h3>

      <div className="inputs_for_beforecustom">
        <div className="child_for_beforecustom">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
          />
          <input
            type="number"
            placeholder="Enter Your Phone Number"
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            value={number}
          />
          <input
            type="text"
            placeholder="Enter Your Event Location"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            value={address}
          />
        </div>
        <div className="child_for_beforecustom">
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />
          <input
            type="date"
            placeholder="Enter Your Event Date"
            onChange={(e) => {
              setdate(e.target.value);
            }}
            value={date}
          />
          <input
            type="time"
            placeholder="Enter Your Event Time"
            onChange={(e) => {
              settime(e.target.value);
            }}
            value={time}
          />
        </div>
        <div className="child_for_beforecustom">
          <NavLink exact to="/customize">
            <input
              className="btn_for_beforecustom"
              type="button"
              value="Cancel"
            />
          </NavLink>
          <input onClick={clear} className="btn_for_beforecustom" type="button" value="Clear" />
          <NavLink exact to="/birthdaycustomize">
            <input
              className="btn_for_beforecustom"
              type="button"
              value="Next"
              onClick={handleClick}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BeforeCustom;
