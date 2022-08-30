import React, { useEffect } from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  var nameofuser = localStorage.getItem("name");
  var nameofuser1 = localStorage.getItem("name1");

  const expand1 = () => {
    document.getElementById("leftside").style.width = "10%";
    document.getElementById("forright").style.width = "90%";
    document.getElementById("left_text1").style.display = "none";
    document.getElementById("left_text2").style.display = "none";
    document.getElementById("left_text3").style.display = "none";
    document.getElementById("icon1").style.paddingLeft = "25px";
    document.getElementById("icon2").style.paddingLeft = "25px";
    document.getElementById("icon3").style.paddingLeft = "25px";
  };
  const expand2 = () => {
    document.getElementById("leftside").style.width = "15%";
    document.getElementById("forright").style.width = "85%";
    document.getElementById("left_text1").style.display = "block";
    document.getElementById("left_text2").style.display = "block";
    document.getElementById("left_text3").style.display = "block";
    document.getElementById("icon1").style.paddingLeft = "0px";
    document.getElementById("icon2").style.paddingLeft = "0px";
    document.getElementById("icon3").style.paddingLeft = "0px";
  };

  useEffect(() => {
    var useremailfordashbaord = localStorage.getItem("useremail");
    console.log(useremailfordashbaord);

    const data = {
      useremailfordashbaord,
    };
    fetch("/api/dashboardbirthday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res.success);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });
  }, []);

  return (
    <div>
      <div className="top_navbar_for_user_dashboard">
        <div className="first_child">EVENTARC</div>
        <div className="first_child">{nameofuser + " " + nameofuser1}</div>
      </div>

      <div className="lower_div_for_dashboard">


        <div className="leftdiv_lower_dashboard">


        <div className="inner_data">
        <i class="fas fa-house-user "></i> <div className="text_for_data">Dashboard</div>
        </div>
        <div className="inner_data">
        <i class="fas fa-list-ul "></i> <div className="text_for_data">My Orders</div>
        </div><div className="inner_data">
        <i class="fas fa-star"></i> <div className="text_for_data">Latest Discounts</div>
        </div><div className="inner_data">
        <i class="fas fa-sign-out-alt"></i> <div className="text_for_data">Sign Out</div>
        </div><div className="inner_data">
        <i class="fas fa-arrow-left"></i> <div className="text_for_data">Back</div>
        </div>

        </div>

        <div className="rightdiv_lower_dashboard container">

        <div className="for_inner_order">
            <div className="evnet_name">
                Name Of Event
            </div>
            <div className="event_date">
                <label htmlFor="">Evnet Date:</label>
                <div>12/12/1212</div>
            </div>
            <div className="event_location">
            <label htmlFor="">Evnet Location:</label>
            <div>Lahore</div>
            </div>

            <div className="delete_btn">
            <i class="fas fa-trash-alt "></i> Delete
            </div>
        </div>


        </div>

      </div>

    </div>
  );
};

export default Dashboard;
