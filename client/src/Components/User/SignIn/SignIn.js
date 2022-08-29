import React from 'react';
import '../CssForUser.css'
const SignIn = () => {
    return (
        <div>
            <div className="main_for_signin">
                <div className="inner_for_signin">
                    <div className="logo_for_sign_in">
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                    <label className='signin_label'>
                        Sign In
                    </label>
                    <div className="input_for_signin">
                        <input type="email" name="" placeholder='Email Address*' id="" />
                    </div>
                    <div className="input_for_signin">
                        <input type="password" name="" placeholder='Password*' id="" />
                    </div>
                    <div className="input_for_signin for-btn">
                        <input type="button" name="" value="SIGN IN" id="" />
                    </div>
                    < div className="links_for_signin">
                        <a href="#">Forgot Password?</a>
                        <a href="#">
                            Don't have an account? Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn