import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Css/All-order.css";
import Hr from "../Hr/Hr";
const Birthday = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [persons, setpersons] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [firework, setfirework] = useState("");
  const [decoration, setdecoration] = useState("");
  const [dj, setdj] = useState("");
  const [buffet, setbuffet] = useState("");
  const [m_pic, setm_pic] = useState("");
  const handleClick = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      persons === "" ||
      date === "" ||
      time === "" ||
      firework === "" ||
      decoration === "" ||
      dj === "" ||
      buffet === "" ||
      m_pic === ""
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
        firework,
        decoration,
        dj,
        buffet,
        m_pic,
      };
      fetch("/api/birthday", {
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
    setpersons("");
    setfirework("");
    setdecoration("");
    setdj("");
    setbuffet("");
    setm_pic("");
    // document.getElementById('one6').style.background= "white";
    // document.getElementById('one6').style.color= "white";
    // document.getElementById('two6').style.background= "white";
    // document.getElementById('two6').style.color= "white";
    var ele = document.getElementsByName("radio6");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio7");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio8");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio9");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
    var ele = document.getElementsByName("radio10");
    for (var i = 0; i < ele.length; i++) ele[i].checked = false;
  };
  return (
    <div className="container">
      <form method="post">
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
                  value={name}
                  placeholder="Enter
Your Full Name...."
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
              </div>
              <div className="sibling-4-birthday ">
                <input
                  type="number"
                  value={number}
                  placeholder="Enter Your Mobile Number...."
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
                  value={email}
                  placeholder="Enter
Your Email Address...."
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </div>
              <div className="sibling-4-birthday">
                <input
                  type="text"
                  value={address}
                  placeholder="Enter Your Setup Loacation...."
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
                <div className="in">
                  <label>Fire Works </label>
                  <div class="radio_container">
                    <input
                      type="radio"
                      name="radio6"
                      id="one6"
                      value={firework}
                      onChange={(e) => {
                        setfirework("YES");
                      }}
                    />
                    <label className="label-btn" for="one6">
                      <i class="far fa-check-circle"></i>
                    </label>
                    <input
                      type="radio"
                      name="radio6"
                      id="two6"
                      value={firework}
                      onChange={(e) => {
                        setfirework("NO");
                      }}
                    />
                    <label className="label-btn" for="two6">
                      <i class="far fa-times-circle"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div className="inner-second-sibling-4-birthday">
                <div className="in">
                  <label>Decoration Setup </label>
                  <div class="radio_container">
                    <input
                      type="radio"
                      name="radio7"
                      id="one7"
                      value={decoration}
                      onChange={(e) => {
                        setdecoration("YES");
                      }}
                    />
                    <label className="label-btn" for="one7">
                      <i class="far fa-check-circle"></i>
                    </label>
                    <input
                      type="radio"
                      name="radio7"
                      id="two7"
                      value={decoration}
                      onChange={(e) => {
                        setdecoration("NO");
                      }}
                    />
                    <label className="label-btn" for="two7">
                      <i class="far fa-times-circle"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="inner-second-child-4-birthday">
              <div className="inner-second-sibling-4-birthday">
                <div className="in">
                  <label>DJ Setup </label>
                  <div class="radio_container">
                    <input
                      type="radio"
                      name="radio8"
                      id="one8"
                      value={dj}
                      onChange={(e) => {
                        setdj("YES");
                      }}
                    />
                    <label className="label-btn" for="one8">
                      <i class="far fa-check-circle"></i>
                    </label>
                    <input
                      type="radio"
                      name="radio8"
                      id="two8"
                      value={dj}
                      onChange={(e) => {
                        setdj("NO");
                      }}
                    />
                    <label className="label-btn" for="two8">
                      <i class="far fa-times-circle"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div className="inner-second-sibling-4-birthday">
                <div className="in">
                  <label>Buffet System </label>
                  <div class="radio_container">
                    <input
                      type="radio"
                      name="radio9"
                      id="one9"
                      value={buffet}
                      onChange={(e) => {
                        setbuffet("YES");
                      }}
                    />
                    <label className="label-btn" for="one9">
                      <i class="far fa-check-circle"></i>
                    </label>
                    <input
                      type="radio"
                      name="radio9"
                      id="two9"
                      value={buffet}
                      onChange={(e) => {
                        setbuffet("NO");
                      }}
                    />
                    <label className="label-btn" for="two9">
                      <i class="far fa-times-circle"></i>
                    </label>
                  </div>
                </div>
              </div>
              <div className="inner-second-sibling-4-birthday">
                <div className="in">
                  <label>Movie/Pics Setup </label>
                  <div class="radio_container">
                    <input
                      type="radio"
                      name="radio10"
                      id="one10"
                      value={m_pic}
                      onChange={(e) => {
                        setm_pic("YES");
                      }}
                    />
                    <label className="label-btn" for="one10">
                      <i class="far fa-check-circle"></i>
                    </label>
                    <input
                      type="radio"
                      name="radio10"
                      id="two10"
                      value={m_pic}
                      onChange={(e) => {
                        setm_pic("NO");
                      }}
                    />
                    <label className="label-btn" for="two10">
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
                  onClick={
                    () => {
                      handleClick();
                    }
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Birthday;
