import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ForHybrid.css";

const One_Two = () => {
  const [personname, setpersonname] = useState("");
  const [personemail, setpersonemail] = useState("");
  const [personaddress, setpersonaddress] = useState("");
  const [personphone, setpersonphone] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [personvalue, setpersonvalue] = useState("10 Persons");
  const [personpizza, setpersonpizza] = useState("2 Large Pizza");
  const [personburger, setpersonburger] = useState("5 Zinger Burger");
  const [personcooldrink, setpersoncooldrink] = useState("2 2.15 Ltr. Pepsi");
  const [personfirewokrs, setpersonfireworks] = useState("Firework Items");
  const [persondecoration, setpersondecoration] = useState(
    "Baloons,Straps & Caps"
  );

  const [pool, setpool] = useState("We Provide You Pool");
  const [swim, setswim] = useState("Glasses,Caps & Footballs");
  const [refresh, setrefresh] = useState("Refreshment At Noon");
  const [parking, setparking] = useState("Parking Availability Yes");
  const [dj, setdj] = useState("Fully DJ Setup");
  const [bottles, setbottles] = useState("5 Water Bottles");

  const onValueSubmit = () => {
    if (
      personname === "" ||
      personemail === "" ||
      personaddress === "" ||
      date === "" ||
      time === "" ||
      personphone === ""

    ) {
      alert("Please Fill All The Fields.")

    }
    else {
      const data = {
        personname,
        personemail,
        personaddress,
        personphone,
        date,
        time,
        personvalue,
        personpizza,
        personburger,
        personcooldrink,
        personfirewokrs,
        persondecoration,
        pool,
        swim,
        refresh,
        parking,
        dj,
        bottles
      };
      fetch("/api/hybrid_first", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errors) {
            alert(res.errors[0].msg);
          }
          else {
            alert(res.success);
            clear();
          }
        })
        .catch((err) => {
          alert("Error while get data from API", err);
        });


    }
  }

  const clear = ( ) =>{
    setpersonname("");
    setpersonemail("");
setpersonaddress("");
setpersonphone("");
setdate("");
settime("");
    

  }

  return (
    <div>
      <div className="main_for_hybrid_childs">
        <div className="para_for_hybrid_childs">
          <div className="">ENTER YOUR PERSONAL DETAILS</div>
        </div>
        <div className="personal_info_for_hybrid_childs">
          <div>
            <input
              className="personal_inputs"
              placeholder="Enter Your Full Name"
              type="text"
              name=""
              id=""
              value={personname}
              onChange={(e) => {
                setpersonname(e.target.value);
              }}
            />
            <input
              className="personal_inputs"
              placeholder="Enter Your Email Address"
              type="email"
              name=""
              id=""
              value={personemail}
              onChange={(e) => {
                setpersonemail(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              className="personal_inputs"
              placeholder="Enter Your Permanent Address"
              type="text"
              name=""
              id=""
              value={personaddress}
              onChange={(e) => {
                setpersonaddress(e.target.value);
              }}
            />
            <input
              className="personal_inputs"
              placeholder="Enter Your Mobile Number"
              type="number"
              name=""
              id=""
              value={personphone}
              onChange={(e) => {
                setpersonphone(e.target.value);
              }}
            />
          </div>
          <div>
        <input  value={date}
              onChange={(e) => {
                setdate(e.target.value);
              }} className="personal_inputs" type="date" name="" id="" />
        <input value={time}
              onChange={(e) => {
                settime(e.target.value);
              }} className="personal_inputs" type="time" name="" id="" 
               />
      </div>
        </div>
        <div className="para_for_hybrid_childs">
          <div> YOUR BIRTHDAY SETUP DETAILS</div>
        </div>
        <div className="personal_info_for_hybrid_childs">
          <div>
            <input type="text" value={personvalue} name="" id="" />
            <input type="text" value={personpizza} name="" id="" />
            <input type="text" value={personburger} name="" id="" />
          </div>
          <div></div>
          <div>
            <input type="text" value={personcooldrink} name="" id="" />
            <input type="text" value={personfirewokrs} name="" id="" />
            <input type="text" value={persondecoration} name="" id="" />
          </div>
        </div>
        <div className="para_for_hybrid_childs">
          <div> YOUR POOL SETUP DETAILS</div>
        </div>
        <div className="personal_info_for_hybrid_childs">
          <div>
            <input value={pool} type="text" name="" id="" />
            <input value={swim} type="text" name="" id="" />
            <input value={refresh} type="text" name="" id="" />
          </div>

          <div>
            <input value={parking} type="text" name="" id="" />

            <input value={dj} type="text" name="" id="" />
            <input value={bottles} type="text" name="" id="" />
          </div>
        </div>
        <div>
          <NavLink exact to="/hybrid">
            <button className="btns_for_hybrid">Cancle</button>
          </NavLink>

          <button onClick={onValueSubmit} className="btns_for_hybrid">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default One_Two;
