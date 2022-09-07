import React from "react";
import Hr2 from "../Hr2/Hr2";
// import Hr from "../Hr/Hr";
import "./Customize.css";
// import custom from "./Images/customi.svg";
import custom from "./Images/cust.jpg";
import vid from "./Images/animation.mp4"

const Customize = () => {
  return (
    <div>
      <div className="main4custom py-5">
        <div className="container">
          <h2 className="text-center">CUSTOMIZABILITY</h2>
          {/* <Hr style={{ color: "Black" }} /> */}

          <Hr2/>

          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12  ">
              <div className="d-flex justify-content-start  flex-column">
                <h3 className="lineh">
                  OUR MIAN FEATURE IS <br />
                  CUSTOMIZATION
                </h3>
                <p className="justi">
                  With this feature, you are free hands to decorate your
                  function on your own. You will really enjoy this feature
                  because in this we have created 3d images with a drag and drop
                  option.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              {/* <img className="img-fluid custom_img" src={custom} alt="" /> */}
              <div className="video_div">
              <video autoplay width="500px"
      height="500px" controls
      loop src={vid}></video>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
