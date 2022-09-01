import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../CssForUser.css";
const SignIn = () => {

  function passwordview() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
    const history = useHistory();
  const [signinuseremail, setsigninuseremail] = useState("");
  const [signinuserpassword, setsigninuserpassword] = useState("");

  const submitsignin = () => {
    if (signinuseremail === "" || signinuserpassword === "") {
      alert("Please Fill Out All Fields!");
    } else {
      const data = {
        signinuseremail,
        signinuserpassword,
      };

      fetch("/api/usersignin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.errors) {
            alert(res.errors[0].msg);
          }
          if (res.error) {
            alert(res.error);
          } else {
            alert(res.success);
        history.push('/')

            console.log(res);
            localStorage.setItem("auth-token", res.authtoken);
            localStorage.setItem("useremail" , signinuseremail);
          }
        })
        .catch((err) => {
          console.log({ err });
          alert("Error while get data from API", err);
        });
    }
  };

  return (
    <div>
      <div className="main_for_signin">
        <div className="inner_for_signin">
          <div className="logo_for_sign_in">
            <i class="fas fa-sign-in-alt"></i>
          </div>
          <label className="signin_label">Sign In</label>
          <div className="input_for_signin">
            <input
              onChange={(e) => {
                setsigninuseremail(e.target.value);
              }}
              value={signinuseremail}
              type="email"
              name=""
              placeholder="Email Address*"
              id=""
            />
          </div>
          <div className="input_for_signin">
            <input
              onChange={(e) => {
                setsigninuserpassword(e.target.value);
              }}
              value={signinuserpassword}
              type="password"
              name=""
              placeholder="Password*"
              id="myInput"

            />


            <div className="mt-3 seepassword" onClick={passwordview}>
              See Password
            </div>



          </div>

          <div className="input_for_signin for-btn">


            <input
              onClick={submitsignin}
              type="button"
              name=""
              value="SIGN IN"
              id=""
            />


          </div>
          <div className="links_for_signin">
            <a href="#">Forgot Password?</a>
            <NavLink exact to="/signup">
              <a href="#">Don't have an account? Sign Up</a>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
