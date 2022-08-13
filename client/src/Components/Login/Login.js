import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    const [name, setname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    console.log(name);
    console.log(number);
    console.log(email);
    console.log(password);



    const valueget = () =>{

    }
  return (
    <div>

        <div className="main_for_login">
            <h3>SIGNUP</h3>
            <div className="inner_for_login">
                <div className="childs_for_login">
                    <input placeholder='Enter Your Full Name' 
                    onChange={(e) => {
                    setname(e.target.value);
                  }} 
                  value={name} type="text" name="" id="" />
                </div>
                <div className="childs_for_login">
                    <input type="number" placeholder='Enter Your Number' onChange={(e) => {
                    setnumber(e.target.value);
                  }} value={number} name="" id="" />
                </div>
                <div className="childs_for_login">
                    <input type="email" placeholder='Enter Your Email' onChange={(e) => {
                    setemail(e.target.value);
                  }} value={email} name="" id="" />
                </div>
                <div className="childs_for_login">
                    <input placeholder='Enter Your Password' type="password" onChange={(e) => {
                    setpassword(e.target.value);
                  }} value={password} name="" id="" />
                </div>
                <div className="childs_for_login">
                    <input onClick={valueget} type="button" value="SIGNUP" name="" id="" />
                </div>
                <div className='hr_for_login'>
                <hr className='hrforlogin' /> <div className='text'>OR</div> <hr className='hrforlogin' />

                </div>
                
                
                <div className="childs_for_login">
                    <input type="button" value="BACK TO LOGIN" name="" id="" />
                </div>
                
                
            </div>
        </div>

        



    </div>
  )
}

export default Login