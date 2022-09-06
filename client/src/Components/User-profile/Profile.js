import React from 'react';
import "./Profile.css";
import man from "../Team/Images/man.png"
import facebook from "../Team/Images/facebook.png"
import googleplus from "../Team/Images/google-plus.png"
import twitter from "../Team/Images/twitter.png"
import { NavLink } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='main_for_profile'>
<div className="inner_for_profile">
<div className="first_for_profile">

<i class="fas fa-bars"></i>
<h6>User Profile</h6>
<NavLink className="anchor_for_profile" exact to="/dashboard">

<i class="fas fa-long-arrow-alt-left"></i>
</NavLink>


</div>
<div className="img_div_for_profile">

    <img src={man} alt="" />
    </div>
    <div className='user_data'>
    <h4>user name</h4>
    <h6>user number</h6>
    <h6>user number</h6>
    <h6>user email</h6>
    </div>



<div className="social_icons_for_profile">

<div className="img_div_pro">
  <img src={facebook} alt="" />
</div>
<div className="img_div_pro">
  <img src={googleplus} alt="" />
</div><div className="img_div_pro">
  <img src={twitter} alt="" />
</div>
</div>


</div>

    </div>
  )
}

export default Profile