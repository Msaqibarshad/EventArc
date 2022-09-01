import React from "react";

import "./Services.css";
import cake from "./Images/New Images/birthday.png";
import custom from "./Images/New Images/customization.png";
import wedding from "./Images/New Images/wedding.png";

import meeting from "./Images/New Images/meeting.png";
import party from "./Images/New Images/dance.png";
import photoshoot from "./Images/New Images/photography.png";
import pool from "./Images/New Images/pool.png";
import hybrid from "./Images/New Images/hybrid.png"
import Hr from "../Hr/Hr";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="main4services text-center py-5" id="services">
        <h2 className="services">SERVICES</h2>
        <Hr />

        <h3 className="h3inner">OUR SERVICES IS OUR FIRST PRIORITY</h3>

        <div className="container-fluid center4services py-4">

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
<div className="inner4services">
<img className="img4services" src={cake} alt="" />
  <h5 className="my-3">BIRTHDAYS</h5>

  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="inner4services">
            <img className="img4services" src={photoshoot} alt="" />
  <h5 className="my-3">PHOTOGRAPHY</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="inner4services">
  <img className="img4services" src={wedding} alt="" />
  <h5 className="my-3">WEDDING SETUP</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="inner4services">
            <img className="img4services" src={meeting} alt="" />
  <h5 className="my-3">METTINGS</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
            </div></div>
            <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="inner4services">
            <img className="img4services" src={pool} alt="" />
<h5 className="my-3">POOL PARTIES</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div className="inner4services">
<img className="img4services" src={party} alt="" />
<h5 className="my-3">PARTIES</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div className="inner4services">
<img className="img4services" src={hybrid} alt="" />
<h5 className="my-3">HYBRID SETUP</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-12">
<div className="inner4services">
<img className="img4services" src={custom} alt="" />
<h5 className="my-3">CUSTOMIZED SETUP</h5>
  <NavLink exact to="/firstinup">
  <a className="text-center" href="">Order To Us <span>&#8594;</span> </a>
  </NavLink>

</div>
</div>
            </div>





        </div>
      </div>
    </div>
  );
};

export default Services;
