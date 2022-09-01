import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";
var emailofuser = "";
const Dashboard = () => {
  var nameofuser = localStorage.getItem("name");
  var nameofuser1 = localStorage.getItem("name1");

  const [birthdayArray, setBirthdayArray] = useState([]);
  const [poolArray, setpoolArray] = useState([]);
  const [weedingArray, setweedingArray] = useState([]);
  const [photoArray, setphotoArray] = useState([]);
  const [partyArray, setpartyArray] = useState([]);
  const [meetingArray, setmeetingArray] = useState([]);
  const [birthdayPoolArray, setbirthdayPoolArray] = useState([]);
  const [birthPhotoArray, setbirthPhotoArray] = useState([]);
  const [poolPhotoArray, setpoolPhotoArray] = useState([]);
  const [birthdayPoolPhotoArray, setbirthdayPoolPhotoArray] = useState([]);
  useEffect(() => {
    var useremailfordashbaord = localStorage.getItem("useremail");
     emailofuser = useremailfordashbaord.split("@")[0];
    console.log({emailofuser});
    console.log(useremailfordashbaord);

    const data = {
      useremailfordashbaord,
    };
    // birthday api calling

    fetch("/api/dashboardbirthday", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setBirthdayArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });
      console.log({check: birthdayArray});

    // pool api calling
    fetch("/api/dashboardpool", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setpoolArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    // weeding api calling
    fetch("/api/dashboardweeding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setweedingArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    //photo api calling
    fetch("/api/dashboardphoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setphotoArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    //party api calling
    fetch("/api/dashboardparty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setpartyArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    //meeting api calling

    fetch("/api/dashboardmeeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setmeetingArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    //Birthday + Pool api calling

    fetch("/api/dashboardBirthdayPool", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setbirthdayPoolArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    //Birthday + Photo api calling

    fetch("/api/dashboardBirthdayPhoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setbirthPhotoArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    // Pool + Party api calling

    fetch("/api/dashboardPoolPhoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setpoolPhotoArray(res);
        }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });

    //Birthday + Pool + Photo api calling

    fetch("/api/dashboardBirthdayPoolPhoto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          alert(res.error);
        } else {
          console.log(res);
          setbirthdayPoolPhotoArray(res);
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
        <div className="first_child">{emailofuser}</div>
      </div>

      <div className="lower_div_for_dashboard">
        <div className="leftdiv_lower_dashboard">
          <div className="inner_data">
            <i class="fas fa-house-user "></i>{" "}
            <div className="text_for_data">Dashboard</div>
          </div>
          <div className="inner_data">
            <i class="fas fa-list-ul "></i>{" "}
            <div className="text_for_data">My Orders</div>
          </div>
          <div className="inner_data">
            <i class="fas fa-star"></i>{" "}
            <div className="text_for_data">Latest Discounts</div>
          </div>
          <div className="inner_data">
            <i class="far fa-trash-alt"></i>{" "}
            <div className="text_for_data">Recently Deleted</div>
          </div>
          <div className="inner_data">
            <i class="far fa-check-square"></i>{" "}
            <div className="text_for_data">Completed Orders</div>
          </div>
          <div className="inner_data">
            <i class="far fa-lightbulb"></i>{" "}
            <div className="text_for_data">Suggestions To Us</div>
          </div>
          <div className="inner_data">
            <i class="fas fa-sign-out-alt"></i>{" "}
            <div className="text_for_data">Sign Out</div>
          </div>
          <NavLink exact to="/">
            <div className="inner_data">
              <i class="fas fa-arrow-left"></i>{" "}
              <div className="text_for_data">Back</div>
            </div>
          </NavLink>
        </div>

        <div className="rightdiv_lower_dashboard container">
          {birthdayArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Birthday</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.address}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {poolArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Pool</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.address}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {weedingArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Weeding</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.address}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}
          {photoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Photo</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.address}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}
          {partyArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Party</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.address}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {meetingArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Meeting</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.address}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {birthdayPoolArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Birth + Pool</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.personaddress}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {birthPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Birth + Photo</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.personaddress}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {poolPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Pool + Photo</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.personaddress}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}
          {birthdayPoolPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order">
                  <div className="evnet_name">Birthday + Pool + Photo</div>
                  <div className="event_date">
                    <label htmlFor="">Event Date:</label>
                    <div>{elem.date}</div>
                  </div>
                  <div className="event_location">
                    <label htmlFor="">Event Location:</label>
                    <div>{elem.personaddress}</div>
                  </div>

                  <div className="delete_btn">
                    <i class="fas fa-trash-alt "></i> Delete
                  </div>
                </div>
              </>
            );
          })}

          {/* <div className="for_inner_order">
            <div className="evnet_name">Name Of Event</div>
            <div className="event_date">
              <label htmlFor="">Event Date:</label>
              <div>12/12/1212</div>
            </div>
            <div className="event_location">
              <label htmlFor="">Event Location:</label>
              <div>Lahore</div>
            </div>

            <div className="delete_btn">
              <i class="fas fa-trash-alt "></i> Delete
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
