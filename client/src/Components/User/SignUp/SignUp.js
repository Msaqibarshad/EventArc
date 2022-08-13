import React from 'react';
import "../CssForUser.css";

const SignUp = () => {
  return (
    <div>
        <div className="main_for_signin">
            <div className="inner_for_signup">

            <div className="logo_for_sign_in">
            <i class="fas fa-user-plus"></i>
            </div>
            
           <label className='signin_label'>
           Sign Up
            </label>
            <div className="input_for_signin">
                <input type="text" name="" placeholder='First Name*' id="" />
            </div>
            <div className="input_for_signin">
                <input type="text" name="" placeholder='Last Name*' id="" />
            </div> 
            <div className="input_for_signin">
                <input type="number" name="" placeholder='Phone Number*' id="" />
            </div>
            <div className="input_for_signin">
                <input type="email" name="" placeholder='Email Address*' id="" />
            </div>
            <div className="input_for_signin">
                <input type="password" name="" placeholder='Password*' id="" />
            </div>

            <div className="input_for_signin for-btn">
                <input type="button" name="" value="SIGN UP" id="" />
            </div>

            < div className="links_for_signin">
                

                

                <a href="#">
Already have an account? Sign In</a>
                
                
                
            </div>

        </div>
            </div>

        
    </div>
  )
}

export default SignUp