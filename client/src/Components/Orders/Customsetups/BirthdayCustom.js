import React, { useState } from "react";
import "./Custom.css";
import bgimg from "./Images/birthday_bg.png";
import table1 from "./Images/table1.png";
import table2 from "./Images/table2.png";
import caketable from "./Images/caketable.png";
import cake1 from "./Images/cake1.png";
import cake2 from "./Images/cake2.png";
import decor1 from "./Images/decor1.png";
import balloon2 from "./Images/balloon2.jpg";
import balloon1 from "./Images/balloon1.png";

const BirthdayCustom = () => {
  const [curtainvalue, setcurtainvalue] = useState("");
  const [caketablevalue, setcaketablevalue] = useState("");
  const [dinntablevalue, setdinntablevalue] = useState("");
  const [cakevalue, setcakevalue] = useState("");
  const [baloonvalue, setbaloonvalue] = useState("");
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [tbtn, settbtn] = useState(false);
  const [cbtn, setcbtn] = useState(false);
  const [sbtn2, setsbtn2] = useState(false);
  const [sbtn3, setsbtn3] = useState(false);
  const [sbtn4, setsbtn4] = useState(false);
  const [sbtn5, setsbtn5] = useState(false);
  const [cakebtn1, setcakebtn1] = useState(false);
  const [cakebtn2, setcakebtn2] = useState(false);
  const [curtainbtn, setcurtainbtn] = useState(false);
  const [caketablebtn, setcaketablebtn] = useState(false);
  const [guesttable1btn, setguesttable1btn] = useState(false);
  const [guesttable2btn, setguesttable2btn] = useState(false);
  const [baloon, setbaloon] = useState(false);

  const birthdaycustomsubmit = () => {
    if (
      name === "" ||
      number === "" ||
      email === "" ||
      address === "" ||
      date === "" ||
      time === "" ||
      curtainvalue === "" ||
      caketablevalue === "" ||
      dinntablevalue === "" ||
      cakevalue === "" ||
      baloonvalue === ""
    ) {
      alert("Select all the fields to go ahead ");
    } else {
      const data = {
        name,
        number,
        email,
        address,
        date,
        time,
        curtainvalue,
        caketablevalue,
        dinntablevalue,
        cakevalue,
        baloonvalue,
      };
      fetch("/api/birthdaycustomizedsetup", {
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
            // clear();
            // history.push("/dashboard");
          }
        })
        .catch((err) => {
          console.log({ err });
          alert("Error while get data from API", err);
        });
    }
  };

  // const [bgbtn, setbgbtn] = useState(false);

  // const bgbtnfuntrue = () => {
  //   setbgbtn(true);
  // }; const bgbtnfunfalse = () => {
  //   setbgbtn(false);
  // };
  const tbtnfun = () => {
    settbtn(true);
  };
  const cbtnfun = () => {
    setcbtn(true);
  };
  // const sbtnfun1 = () => {
  //   setsbtn1(true);
  // };
  const sbtnfun2 = () => {
    setsbtn2(true);
  };
  const sbtnfun3 = () => {
    setsbtn3(true);
  };
  const sbtnfun4 = () => {
    setsbtn4(true);
  };
  const sbtnfun5 = () => {
    setsbtn5(true);
  };

  const cakebtn1fun = () => {
    setcakebtn1(true);
    setcakebtn2(false);

    setcakevalue("Cake 1 Selected");
  };
  const cakebtn2fun = () => {
    setcakebtn2(true);
    setcakebtn1(false);

    setcakevalue("Cake 2 Selected");
  };

  const curtainfunctrue = () => {
    setcurtainbtn(true);
    setcurtainvalue("Curtain Cloth Selected");
  };
  const curtainfuncfalse = () => {
    setcurtainbtn(false);
    setcurtainvalue("Curtain Cloth Unselected");
  };
  const caketablefunctrue = () => {
    setcaketablebtn(true);
    setcaketablevalue("Cake Table Selected");
  };
  const caketablefuncfalse = () => {
    setcaketablebtn(false);
    setcaketablevalue("Cake Table Unselected");
  };
  const guesttable1func = () => {
    setguesttable1btn(true);
    setguesttable2btn(false);
    setdinntablevalue("Table 1 Selected");
  };
  const guesttable2func = () => {
    setguesttable2btn(true);
    setguesttable1btn(false);
    setdinntablevalue("Table 2 Selected");

    // setdinntablevalue("Table 1 Selected");
  };

  const baloonfunctrue = () => {
    setbaloon(true);
    setbaloonvalue("Baloons Selected");
  };
  const baloonfuncfalse = () => {
    setbaloon(false);
    setbaloonvalue("Baloons unselected");
  };

  return (
    <div className="main_for_birthday_custom">
      <div className="data_of_user_customizedbirthday_setup">
        <h3 className="">Enter Your Personal Details</h3>
        <div className="inputs_for_custom_birthday">
          <input type="text" value={name} onChange={(e) =>{
            setname(e.target.value)
          }} placeholder="Enter Your Name" />
          <input type="text" value={number} onChange={(e) =>{
            setnumber(e.target.value)
          }} placeholder="Enter Your Phone Number" />

          <input type="text" value={address} onChange={(e) =>{
            setaddress(e.target.value)
          }} placeholder="Enter Your Setup Location" />
        </div>
        <div className="inputs_for_custom_birthday">
          <input value={email} onChange={(e) =>{
            setemail(e.target.value)
          }} type="text" placeholder="Enter Your Email" />
          <input value={date} onChange={(e) =>{
            setdate(e.target.value)
          }} type="date" />
          <input value={time} onChange={(e) =>{
            settime(e.target.value)
          }} type="time" />
        </div>
        <div className="inputs_for_custom_birthday">
          <input
            className="btn_custmized_birthday"
            type="button"
            value="Clear"
          />

          <input
            className="btn_custmized_birthday"
            type="button"
            value="Cancel"
          />
        </div>
      </div>
      <div className="inner_div1_for_custom_birthday">
        <img src={bgimg} alt="" />

        {curtainbtn ? (
          <>
            <img className="decor1" src={decor1} alt="" value={curtainvalue} />
          </>
        ) : (
          <></>
        )}

        {caketablebtn ? (
          <>
            <img className="caketable" src={caketable} alt="" />
          </>
        ) : (
          <></>
        )}

        {guesttable1btn ? (
          <>
            <img className="table1" src={table1} alt="" />
          </>
        ) : (
          <></>
        )}
        {guesttable2btn ? (
          <>
            <img className="table1" src={table2} alt="" />
          </>
        ) : (
          <></>
        )}

        {cakebtn1 ? (
          <>
            <img className="cake1" src={cake1} alt="" />
          </>
        ) : (
          <></>
        )}
        {cakebtn2 ? (
          <>
            <img src={cake2} className="cake1" alt="" />
          </>
        ) : (
          <></>
        )}

        {baloon ? (
          <>
            <img src={balloon2} alt="" className="ballon2" />
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="inner_div2_for_custom_birthday">
        <div className="new_div">
          {sbtn2 ? (
            <>
              <div className="options_table">
                <div className="first_option1" onClick={curtainfunctrue}>
                  Select
                </div>
                <div className="first_option2" onClick={curtainfuncfalse}>
                  UnSelect
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div
            className="inner_child_for_custom_birthday2"
            onClick={sbtnfun2}
          ></div>
          <label htmlFor="">Back Curtain</label>
        </div>
        <div className="new_div">
          {sbtn3 ? (
            <>
              <div className="options_table">
                <div className="first_option1" onClick={caketablefunctrue}>
                  Select
                </div>
                <div className="first_option2" onClick={caketablefuncfalse}>
                  UnSelect
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div
            className="inner_child_for_custom_birthday3"
            onClick={sbtnfun3}
          ></div>
          <label htmlFor="">Cake Table</label>
        </div>
        <div className="new_div">
          {tbtn ? (
            <>
              <div className="options_table">
                <div className="first_option1" onClick={guesttable1func}>
                  Table 01
                </div>
                <div className="first_option2" onClick={guesttable2func}>
                  Table 02
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div
            className="inner_child_for_custom_birthday4"
            onClick={tbtnfun}
          ></div>
          <label htmlFor="">Guest Table</label>
        </div>
        <div className="new_div">
          {cbtn ? (
            <>
              <div className="options_table">
                <div className="first_option1" onClick={cakebtn1fun}>
                  Cake 01
                </div>
                <div className="first_option2" onClick={cakebtn2fun}>
                  Cake 02
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          <div
            className="inner_child_for_custom_birthday5"
            onClick={cbtnfun}
          ></div>
          <label htmlFor="">Cake</label>
        </div>
        <div className="new_div">
          {sbtn4 ? (
            <>
              <div className="options_table">
                <div className="first_option1" onClick={baloonfunctrue}>
                  Select
                </div>
                <div className="first_option2" onClick={baloonfuncfalse}>
                  UnSelect
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div
            className="inner_child_for_custom_birthday6"
            onClick={sbtnfun4}
          ></div>
          <label htmlFor="">Ballons</label>
        </div>

        <div className="new_div">
          {sbtn5 ? (
            <>
              <div className="options_table">
                <div className="first_option1">Select</div>
                <div className="first_option2">UnSelect</div>
              </div>
            </>
          ) : (
            <></>
          )}
          <div
            className="inner_child_for_custom_birthday7"
            onClick={sbtnfun5}
          ></div>
          <label htmlFor="">Birthday Spelling</label>
        </div>
      </div>
      <input
        type="button"
        value="Submit"
        onClick={birthdaycustomsubmit}
        className="custombirthdaysubmit"
      />
    </div>
  );
};

export default BirthdayCustom;
