import React, { useState } from 'react';
import { NavLink } from "react-router-dom";


const Two_Three = () => {
  const [personname, setpersonname] = useState("");
  const [personemail, setpersonemail] = useState("");
  const [personaddress, setpersonaddress] = useState("");
  const [personphone, setpersonphone] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [pool, setpool] = useState("We Provide You Pool");
  const [swim, setswim] = useState("Glasses,Caps & Footballs");
  const [refresh, setrefresh] = useState("Refreshment At Noon");
  const [parking, setparking] = useState("Parking Availability Yes");
  const [dj, setdj] = useState("Fully DJ Setup");
  const [bottles, setbottles] = useState("5 Water Bottles");
  const [clicks, setclicks] = useState("40 Clicks");
  const [editedphoto, seteditedphoto] = useState("All Edited Photos");
  const [outdoorclicks, setoutdoorclicks] = useState("10 Outdoor Clicks");
  const [editedvideo, seteditedvideo] = useState("20 Minutes Edited Video");
  const [randomclicls, setrandomclicls] = useState("5 Random Clicks");
  const [printed, setprinted] = useState("20 Selected Printed Photos");

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
        pool,
        swim,
        refresh,
        parking,
        dj,
        bottles,
        clicks,
        editedphoto,
        outdoorclicks,
        editedvideo,
        randomclicls,
        printed
        
      };
      fetch("/api/hybrid_third", {
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
          }
        })
        .catch((err) => {
          alert("Error while get data from API", err);
        });


    }
  }

  return (
    <div>
        <div className="main_for_hybrid_childs">
    <div className="para_for_hybrid_childs">
      <div>ENTER YOUR PERSONAL DETAILS</div>
    </div>
    <div className="personal_info_for_hybrid_childs">
      <div>
        <input
        placeholder="Enter Your Full Name" value={personname}
        onChange={(e) => {
          setpersonname(e.target.value);
        }}
         className="personal_inputs" type="text" name="" id="" />
        <input
        placeholder="Enter Your Email Address" value={personemail}
        onChange={(e) => {
          setpersonemail(e.target.value);
        }}
        className="personal_inputs" type="email" name="" id="" />
      </div>

      <div>
        <input
        placeholder="Enter Your Permanent Address" value={personaddress}
        onChange={(e) => {
          setpersonaddress(e.target.value);
        }}
        className="personal_inputs" type="text" name="" id="" />
        <input
        placeholder="Enter Your Mobile Number"
        value={personphone}
              onChange={(e) => {
                setpersonphone(e.target.value);
              }}
         className="personal_inputs" type="number" name="" id="" />
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
    <div className="para_for_hybrid_childs">
        <div> YOUR PHOTOGRAPHY SETUP DETAILS</div>
    </div>
    <div className="personal_info_for_hybrid_childs">
      <div>
        <input value={clicks} type="text" name="" id="" />
        <input value={editedphoto} type="text" name="" id="" />
      <input value={outdoorclicks} type="text" name="" id="" />

      </div>
      
      <div>
      <input value={editedvideo} type="text" name="" id="" />

      <input value={randomclicls} type="text" name="" id="" />
        <input value={printed} type="text" name="" id="" />
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
  )
}

export default Two_Three