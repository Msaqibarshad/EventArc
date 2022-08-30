import React,{useEffect} from 'react';
import './Dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {

    var nameofuser = localStorage.getItem("name");
    var nameofuser1 = localStorage.getItem("name1");

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

    useEffect(() => {
      var useremailfordashbaord = localStorage.getItem("useremail");
      console.log(useremailfordashbaord);

      const data =  {
        useremailfordashbaord
      };
      fetch("/api/dashboardbirthday",{
        method:"POST",
        headers:{
          "Content-Type": "application/json",

        },
        body:JSON.stringify(data),

      })
      .then((res) => res.json())
      .then((res) =>{
        console.log({res});
        if(res.error){
            alert(res.error)
        }
        else{
            console.log(res.success)
        }
      })
      .catch((err) =>{
        console.log({err});
        alert("Error while get data from API" , err);
      })

    }, [])


  return (
    <div>
        <div className="top_navbar_for_user_dashboard">
            <div className="first_child">EVENTARC</div>
            <div className="first_child">{nameofuser + " " + nameofuser1 }</div>


        </div>
            <div className="side_bar_left" id='leftside'>
                <div className="inner_for_left_sidebar">
                <i id='icon1' class="far fa-calendar-check mx-3"></i>
                <div className='text_for_left_sidebar' id='left_text1'>

                My Orders
                </div>
                </div>
                <div className="inner_for_left_sidebar">
                <i id='icon2' class="fas fa-sign-out-alt mx-3"></i>

                <div className='text_for_left_sidebar' id='left_text2'>

                Sign Out
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
                        <div className="child_inner_function">
                        <i class=" mx-2 fas fa-trash"></i>
                            Delete
                        </div>

                        <div className="child_inner_function">
                        <i class=" mx-2 fas fa-edit"></i>
                            Edit
                        </div>
                    </div>
                </div>



            </div>


    </div>
  )
}

export default Dashboard