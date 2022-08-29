import React from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
    const expand1 = () =>{
        document.getElementById("leftside").style.width="10%";
        document.getElementById("forright").style.width="90%";
        document.getElementById("left_text1").style.display="none";
        document.getElementById("left_text2").style.display="none";
        document.getElementById("left_text3").style.display="none";
        document.getElementById("icon1").style.paddingLeft="25px";
        document.getElementById("icon2").style.paddingLeft="25px";
        document.getElementById("icon3").style.paddingLeft="25px";

    }
    const expand2 = () =>{
        document.getElementById("leftside").style.width="15%";
        document.getElementById("forright").style.width="85%";
        document.getElementById("left_text1").style.display="block";
        document.getElementById("left_text2").style.display="block";
        document.getElementById("left_text3").style.display="block";
        document.getElementById("icon1").style.paddingLeft="0px";
        document.getElementById("icon2").style.paddingLeft="0px";
        document.getElementById("icon3").style.paddingLeft="0px";
    }
  return (
    <div>
        <div className="top_navbar_for_user_dashboard">
            <div className="first_child">EVENTARC</div>
            <div className="first_child">USERNAME</div>
            <div className="first_child">DP</div>


        </div>
            <div className="side_bar_left" id='leftside'>
                <div className="inner_for_left_sidebar">
                <i id='icon1' class="far fa-calendar-check mx-3"></i>
                <div className='text_for_left_sidebar' id='left_text1'>

                All Orders
                </div>
                </div>


                <NavLink exact to="/">

                <div className="inner_for_left_sidebar">
                <i id='icon3' class="fas fa-hand-point-left mx-3"></i>
                <div className='text_for_left_sidebar' id='left_text3'>
                Back

                </div>
                </div>
                </NavLink>


                <div className="forexpand">
                <i onClick={expand1} class="fas fa-chevron-circle-left"></i>
                <i onClick={expand2} class="fas fa-chevron-circle-right"></i>
                </div>


            </div>
            <div className="side_bar_right" id='forright'>
                <div className="inner_for_right_side">
                    <div className="inner_setup_name">
                        Birthday
                    </div>
                    <div className="inner_functions">
                        <div className="child_inner_function">
                        <i class="fas fa-eye mx-1"></i>
                            View Order
                        </div>

                    </div>
                </div>



            </div>


    </div>
  )
}

export default AdminDashboard