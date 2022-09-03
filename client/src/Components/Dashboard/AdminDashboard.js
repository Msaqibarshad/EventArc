import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
  const [updownbtn, setupdownbtn] = useState(true);
  const [birthdayArray, setBirthdayArray] = useState([]);
  const [poolArray, setpoolArray] = useState([]);
  const [weedingArray, setweedingArray] = useState([]);
  const [photoArray, setphotoArray] = useState([]);
  const [partyArray, setpartyArray] = useState([]);
  const [meetingArray, setmeetingArray] = useState([]);
  const [customArray, setcustomArray] = useState([]);

  const [birthdayPoolArray, setbirthdayPoolArray] = useState([]);
  const [birthPhotoArray, setbirthPhotoArray] = useState([]);
  const [poolPhotoArray, setpoolPhotoArray] = useState([]);
  const [birthdayPoolPhotoArray, setbirthdayPoolPhotoArray] = useState([]);
  const [event, setevent] = useState("Birthday");

  // {
  //   event === "Birthday"
  //     ? console.log("this is the birthday table")
  //     : event === "Pool"
  //     ? console.log("This is value of Pool table")
  //     : event === "Wedding"
  //     ? console.log("this is the value of wedding table")
  //     : event === "Photo"
  //     ? console.log("this is the value of photo table")
  //     : event === "Party"
  //     ? console.log("this is the value of party table")
  //     : event === "Meeting"
  //     ? console.log("This is the value of meeting table")
  //     : event === "Birthday+Pool"
  //     ? console.log("this is the value of birth + Pool")
  //     : event === "Birthday+Photo"
  //     ? console.log("this is the value of birthday + photo")
  //     : event === "Pool+Photo"
  //     ? console.log("this is the value of pool + photo table")

  //     : event === "Birthday+Pool+Photo" ? (console.log("this is the value of birth + pool + photo table")) : console.log();
  // }

  const forup = () => {
    setupdownbtn(true);
    document.getElementById("dropforadmin").style.display = "none";
  };
  const fordown = () => {
    setupdownbtn(false);
    document.getElementById("dropforadmin").style.display = "block";
  };

  useEffect(() => {
    var useremailfordashbaord = localStorage.getItem("useremail");
    console.log(useremailfordashbaord);
    const data = {
      useremailfordashbaord,
    };

    // birthday api calling in admin dashboard

    fetch("/api/admindashboardbirthday", {
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
    console.log({ check: birthdayArray });

    //pool api calling for admin dashboard

    fetch("/api/admindashboardpool", {
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

    // wedding api calling for admin dashboard

    fetch("/api/admindashboardwedding", {
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

    // photo api calling for admin dashboard

    fetch("/api/admindashboardphoto", {
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

    // party api calling for admin dashboard

    fetch("/api/admindashboardparty", {
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

    // meeting api calling for main dashboard

    fetch("/api/admindashboardmeeting", {
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

// custom setup api call for admin dashboard

fetch("/api/admindashboardcustom", {
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
      setcustomArray(res);
    }
  })
  .catch((err) => {
    console.log({ err });
    alert("Error while get data from API", err);
  });


    // birthday + pool api calling for main dashboard
    fetch("/api/admindashboardbirthdaypool", {
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

    // birthday + photo api calling for main dashboard
    fetch("/api/admindashboardbirthdayphoto", {
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

    // pool + photo api calling for main dashboard
    fetch("/api/admindashboardpoolphoto", {
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

    // birthday + pool + photo  api calling for main dashboard
    fetch("/api/admindashboardbirthdaypoolphoto", {
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
        <div className="first_child">EventArc Admins</div>
      </div>
      <div className="lower_div_for_dashboard">
        <div className="leftdiv_lower_dashboard">
          <div className="inner_data">
            <i class="fas fa-house-user "></i>{" "}
            <div className="text_for_data">Admin Dashboard</div>
          </div>
          <div className="inner_data1">
            <div className="text_for_data">
              <i class="fas fa-list-ul mx-2"></i>
              All Orders{" "}
            </div>
            {updownbtn ? (
              <i class="fas fa-chevron-down " onClick={fordown}></i>
            ) : (
              <i class="fas fa-chevron-up" onClick={forup}></i>
            )}
          </div>
          <div className="all_order_inner_dropdown" id="dropforadmin">
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Birthday");
              }}
            >
              <div>Birthday </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Pool");
              }}
            >
              <div>Pool </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Wedding");
              }}
            >
              <div>Wedding </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Photo");
              }}
            >
              <div>Photo </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Party");
              }}
            >
              <div>Party </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Meeting");
              }}
            >
              <div>Meeting </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Custom");
              }}
            >
              <div>Custom </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Birthday+Pool");
              }}
            >
              <div>Birth+Pool </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Birthday+Photo");
              }}
            >
              <div>Birth+Photo </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Pool+Photo");
              }}
            >
              <div>Pool+Photo </div>
            </div>
            <div
              className="inner_data2"
              onClick={() => {
                setevent("Birthday+Pool+Photo");
              }}
            >
              <div>Birth+Pool+Photo </div>
            </div>
          </div>

          <div className="inner_data">
            <i class="far fa-check-square"></i>{" "}
            <div className="text_for_data">Completed Orders</div>
          </div>
          <div className="inner_data">
            <i class="far fa-lightbulb"></i>{" "}
            <div className="text_for_data">Suggestions For Us</div>
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
          {/* //data of all birthday orders */}

          {
    event === "Birthday"
      ? <>
      {birthdayArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">{index + 1} Birthday Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.firework}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.decoration}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Buffet:</label>
                        <div className="mx-2">{elem.buffet}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Movie/Pics:</label>
                        <div className="mx-2">{elem.m_pic}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}


      </>
      : event === "Pool"
      ? <>

{poolArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Pool Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refreshment}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Camera:</label>
                        <div className="mx-2">{elem.camera}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swimaccessories}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Snacks/Cool Drink:</label>
                        <div className="mx-2">{elem.snack_cool}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

      </>
      : event === "Wedding"
      ? <>

{weedingArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Wedding Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Buffet Items:</label>
                        <div className="mx-2">{elem.bitems}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration Items:</label>
                        <div className="mx-2">{elem.ditems}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Stage/Chair Type:</label>
                        <div className="mx-2">{elem.stagechtype}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration Color:</label>
                        <div className="mx-2">{elem.dcolor}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.fireworks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Other Decorations:</label>
                        <div className="mx-2">{elem.otherdec}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
      : event === "Photo"
      ? <>
      {photoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Photo Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Number Of Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.water}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Snacks:</label>
                        <div className="mx-2">{elem.snack}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.drink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pictures:</label>
                        <div className="mx-2">{elem.edited}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Indoor Shoot:</label>
                        <div className="mx-2">{elem.indoor}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Shoot:</label>
                        <div className="mx-2">{elem.outdoor}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Both Shoots:</label>
                        <div className="mx-2">{elem.both}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
      : event === "Party"
      ? <>

{partyArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Party Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.pizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.burger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Snacks/Cool Drink:</label>
                        <div className="mx-2">{elem.snack_cool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Camera:</label>
                        <div className="mx-2">{elem.camera}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.decoration}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

      </>
      : event === "Meeting"
      ? <>
      {meetingArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Meeting Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.water}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.drink}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Projector:</label>
                        <div className="mx-2">{elem.projector}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Camera:</label>
                        <div className="mx-2">{elem.camera}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Stationaruy Items:</label>
                        <div className="mx-2">{elem.stationary}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Tables:</label>
                        <div className="mx-2">{elem.table}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">White Board:</label>
                        <div className="mx-2">{elem.whiteboard}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refreshment}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
     : event === "Custom" ? <>
     {customArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Custom Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>

                  </div>
                </div>
              </>
            );
          })}
     </>

      : event === "Birthday+Pool"
      ? <>
      {birthdayPoolArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Birthday + Pool Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.personvalue}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.personpizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.personburger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.personcooldrink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.personfirewokrs}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.persondecoration}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swim}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refresh}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.bottles}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
      : event === "Birthday+Photo"
      ? <>
      {birthPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Birthday + Photo Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.personvalue}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.personpizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.personburger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.personcooldrink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.personfirewokrs}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.persondecoration}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Total Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pics:</label>
                        <div className="mx-2">{elem.editedphoto}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Clicks:</label>
                        <div className="mx-2">{elem.outdoorclicks}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Edited Video:</label>
                        <div className="mx-2">{elem.editedvideo}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Random Clicks:</label>
                        <div className="mx-2">{elem.randomclicls}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Printed Pics:</label>
                        <div className="mx-2">{elem.printed}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
      : event === "Pool+Photo"
      ? <>
      {poolPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Pool + Photo Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swim}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refresh}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.bottles}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Total Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pics:</label>
                        <div className="mx-2">{elem.editedphoto}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Clicks:</label>
                        <div className="mx-2">{elem.outdoorclicks}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Edited Video:</label>
                        <div className="mx-2">{elem.editedvideo}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Random Clicks:</label>
                        <div className="mx-2">{elem.randomclicls}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Printed Pics:</label>
                        <div className="mx-2">{elem.printed}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </>
      : event === "Birthday+Pool+Photo" ? <>
      {birthdayPoolPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Birthday + Pool + Photo Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.personvalue}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.personpizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.personburger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.personcooldrink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.personfirewokrs}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.persondecoration}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swim}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refresh}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.bottles}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Total Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pics:</label>
                        <div className="mx-2">{elem.editedphoto}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Clicks:</label>
                        <div className="mx-2">{elem.outdoorclicks}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Edited Video:</label>
                        <div className="mx-2">{elem.editedvideo}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Random Clicks:</label>
                        <div className="mx-2">{elem.randomclicls}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Printed Pics:</label>
                        <div className="mx-2">{elem.printed}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

      </> : console.log()
  }

          {/* {birthdayArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">{index + 1} Birthday Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.firework}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.decoration}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Buffet:</label>
                        <div className="mx-2">{elem.buffet}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Movie/Pics:</label>
                        <div className="mx-2">{elem.m_pic}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* //data of all pool orders */}

          {/* {poolArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Pool Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refreshment}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Camera:</label>
                        <div className="mx-2">{elem.camera}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swimaccessories}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Snacks/Cool Drink:</label>
                        <div className="mx-2">{elem.snack_cool}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all wedding orders */}

          {/* {weedingArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Wedding Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Buffet Items:</label>
                        <div className="mx-2">{elem.bitems}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration Items:</label>
                        <div className="mx-2">{elem.ditems}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Stage/Chair Type:</label>
                        <div className="mx-2">{elem.stagechtype}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration Color:</label>
                        <div className="mx-2">{elem.dcolor}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.fireworks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Other Decorations:</label>
                        <div className="mx-2">{elem.otherdec}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all photo setups */}

          {/* {photoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Photo Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Number Of Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.water}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Snacks:</label>
                        <div className="mx-2">{elem.snack}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.drink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pictures:</label>
                        <div className="mx-2">{elem.edited}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Indoor Shoot:</label>
                        <div className="mx-2">{elem.indoor}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Shoot:</label>
                        <div className="mx-2">{elem.outdoor}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Both Shoots:</label>
                        <div className="mx-2">{elem.both}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all party setups */}

          {/* {partyArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Party Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.pizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.burger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Snacks/Cool Drink:</label>
                        <div className="mx-2">{elem.snack_cool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Camera:</label>
                        <div className="mx-2">{elem.camera}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.decoration}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all meeting setups */}
          {/* {meetingArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name"> {index + 1} Meeting Setup</div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.name}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.number}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.email}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.address}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.persons}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.water}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.drink}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Projector:</label>
                        <div className="mx-2">{elem.projector}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Camera:</label>
                        <div className="mx-2">{elem.camera}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Stationaruy Items:</label>
                        <div className="mx-2">{elem.stationary}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Tables:</label>
                        <div className="mx-2">{elem.table}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">White Board:</label>
                        <div className="mx-2">{elem.whiteboard}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refreshment}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all birthday+pool setups */}

          {/* {birthdayPoolArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Birthday + Pool Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.personvalue}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.personpizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.personburger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.personcooldrink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.personfirewokrs}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.persondecoration}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swim}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refresh}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.bottles}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all birthday+photo setups */}

          {/* {birthPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Birthday + Photo Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.personvalue}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.personpizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.personburger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.personcooldrink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.personfirewokrs}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.persondecoration}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Total Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pics:</label>
                        <div className="mx-2">{elem.editedphoto}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Clicks:</label>
                        <div className="mx-2">{elem.outdoorclicks}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Edited Video:</label>
                        <div className="mx-2">{elem.editedvideo}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Random Clicks:</label>
                        <div className="mx-2">{elem.randomclicls}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Printed Pics:</label>
                        <div className="mx-2">{elem.printed}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all pool+photo setups */}

          {/* {poolPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Pool + Photo Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swim}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refresh}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.bottles}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Total Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pics:</label>
                        <div className="mx-2">{elem.editedphoto}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Clicks:</label>
                        <div className="mx-2">{elem.outdoorclicks}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Edited Video:</label>
                        <div className="mx-2">{elem.editedvideo}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Random Clicks:</label>
                        <div className="mx-2">{elem.randomclicls}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Printed Pics:</label>
                        <div className="mx-2">{elem.printed}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}

          {/* data of all birthday+pool+photo setups */}

          {/* {birthdayPoolPhotoArray.map((elem, index) => {
            return (
              <>
                <div className="for_inner_order_admin">
                  <div className="first_inner_div_admin_dashboard_Order">
                    <div className="evnet_name">
                      {" "}
                      {index + 1} Birthday + Pool + Photo Setup
                    </div>
                  </div>

                  <div className="second_inner_div_admin_dashboard_Order">
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Name:</label>
                        <div className="mx-2">{elem.personname}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Phone #:</label>
                        <div className="mx-2">{elem.personphone}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">User Email:</label>
                        <div className="mx-2">{elem.personemail}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">User Event Location:</label>
                        <div className="mx-2">{elem.personaddress}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Date:</label>
                        <div className="mx-2">{elem.date}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Event Setup Time:</label>
                        <div className="mx-2">{elem.time}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Number Of Person:</label>
                        <div className="mx-2">{elem.personvalue}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Pizza:</label>
                        <div className="mx-2">{elem.personpizza}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Burger:</label>
                        <div className="mx-2">{elem.personburger}</div>
                      </div>
                    </div>
                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Cool Drinks:</label>
                        <div className="mx-2">{elem.personcooldrink}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Fireworks:</label>
                        <div className="mx-2">{elem.personfirewokrs}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Decoration:</label>
                        <div className="mx-2">{elem.persondecoration}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Pool:</label>
                        <div className="mx-2">{elem.pool}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Swimming Accessories:</label>
                        <div className="mx-2">{elem.swim}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Refreshment:</label>
                        <div className="mx-2">{elem.refresh}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Parking:</label>
                        <div className="mx-2">{elem.parking}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">DJ:</label>
                        <div className="mx-2">{elem.dj}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Water Bottles:</label>
                        <div className="mx-2">{elem.bottles}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Total Clicks:</label>
                        <div className="mx-2">{elem.clicks}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Edited Pics:</label>
                        <div className="mx-2">{elem.editedphoto}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Outdoor Clicks:</label>
                        <div className="mx-2">{elem.outdoorclicks}</div>
                      </div>
                    </div>

                    <div className="user_upper_details_div">
                      <div className="user_details">
                        <label htmlFor="">Edited Video:</label>
                        <div className="mx-2">{elem.editedvideo}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Random Clicks:</label>
                        <div className="mx-2">{elem.randomclicls}</div>
                      </div>
                      <div className="user_details">
                        <label htmlFor="">Printed Pics:</label>
                        <div className="mx-2">{elem.printed}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
