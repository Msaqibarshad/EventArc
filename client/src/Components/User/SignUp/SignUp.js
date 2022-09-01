import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../CssForUser.css";
const SignUp = () => {
    function passwordview() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    const [signupusernamefirst, setsignupusernamefirst] = useState("");

    const [signupusernamelast, setsignupusernamelast] = useState("");
    const [signupuserphone, setsignupuserphone] = useState("");
    const [signupuseremail, setsignupuseremail] = useState("");
    const [signupuserpassword, setsignupuserpassword] = useState("");
    const submitsignup = () =>{
        if(
            signupusernamefirst === "" ||
signupusernamelast === "" ||
signupuserphone === "" ||
signupuseremail === "" ||
signupuserpassword === ""

        ){
            alert("Please Fill Out All Fields!")
        }
        else{
            const data = {
                signupusernamefirst,
                signupusernamelast,
                signupuserphone,
                signupuseremail,
                signupuserpassword
            };

            fetch("/api/usersignup" ,{
                method:"POST",
                headers:{
          "Content-Type": "application/json",

                },
        body: JSON.stringify(data),

            })
            .then((res) => res.json())
        .then((res) => {

          if (res.errors) {
            alert(res.errors[0].msg);
          }
          if(res.error){
            alert(res.error)
          }
          else {
            alert(res.success)


           localStorage.setItem("name" , signupusernamefirst);
           localStorage.setItem("name1" , signupusernamelast);
           localStorage.setItem("useremail" , signupuseremail);


           console.log(res)
           localStorage.setItem("auth-token" , res.authtoken)
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
                <div className="inner_for_signup">
                    <div className="logo_for_sign_in">
                        <i class="fas fa-user-plus"></i>
                    </div>
                    <label className='signin_label'>Sign Up</label>
                    <div className="input_for_signin">
                        <input value={signupusernamefirst}
                        onChange={(e) => {
                            setsignupusernamefirst(e.target.value);
                          }}
                        type="text" name="" placeholder='First Name*' id="" />
                    </div>
                    <div className="input_for_signin">
                        <input value={signupusernamelast}
                        onChange={(e) => {
                            setsignupusernamelast(e.target.value);
                          }}
                        type="text" name="" placeholder='Last Name*' id="" />
                    </div>
                    <div className="input_for_signin">
                        <input value={signupuserphone}
                        onChange={(e) => {
                            setsignupuserphone(e.target.value);
                          }}
                        type="number" name="" placeholder='Phone Number*' id="" />
                    </div>
                    <div className="input_for_signin">
                        <input value={signupuseremail}
                        onChange={(e) => {
                            setsignupuseremail(e.target.value);
                          }}
                        type="email" name="" placeholder='Email Address*' id="" />
                    </div>
                    <div className="input_for_signin">
                        <input value={signupuserpassword}
                        onChange={(e) => {
                            setsignupuserpassword(e.target.value);
                          }}
                        type="password" name="" placeholder='Password*' id="myInput" />


                          <div className="mt-3 seepassword1" onClick={passwordview}>
              See Password
            </div>
                    </div>


                    <NavLink exact to="/signin">

                    <div className="input_for_signin for-btn">
                        <input onClick={submitsignup} type="button" name="" value="SIGN UP" id="" />
                    </div>
                    </NavLink>
                    < div className="links_for_signin">
                        <NavLink exact to="/signin">

                        <a href="#">
                            Already have an account? Sign In</a>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignUp