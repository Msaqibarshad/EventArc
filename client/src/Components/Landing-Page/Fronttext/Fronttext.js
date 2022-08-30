import React, { useEffect } from "react";
import "./Fronttext.css";
import eve from "../images/imgmain.png";
// import {Helmet} from "react-helmet";


const Fronttext = () => {
  useEffect(() => {
    var span = document.querySelector(".typewriter span");
    var textArr = span.getAttribute("data-text").split(", ");
    var maxTextIndex = textArr.length;

    var sPerChar = 0.15;
    var sBetweenWord = 1.5;
    var textIndex = 0;

    typing(textIndex, textArr[textIndex]);

    function typing(textIndex, text) {
      var charIndex = 0;
      var maxCharIndex = text.length - 1;

      var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex];
        if (charIndex === maxCharIndex) {
          clearInterval(typeInterval);
          setTimeout(function () {
            deleting(textIndex, text);
          }, sBetweenWord * 1000);
        } else {
          charIndex += 1;
        }
      }, sPerChar * 1000);
    }

    function deleting(textIndex, text) {
      var minCharIndex = 0;
      var charIndex = text.length - 1;

      var typeInterval = setInterval(function () {
        span.innerHTML = text.substr(0, charIndex);
        if (charIndex === minCharIndex) {
          clearInterval(typeInterval);
          textIndex + 1 === maxTextIndex ? (textIndex = 0) : (textIndex += 1);
          setTimeout(function () {
            typing(textIndex, textArr[textIndex]);
          }, sBetweenWord * 1000);
        } else {
          charIndex -= 1;
        }
      }, sPerChar * 1000);
    }
  }, []);

  return (
    <>
      <div class=" containerof" >
        <div className="container updirection">
          <div className="row center4front">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="head4front">
                EVENT<span>ARC</span>
              </h1>


              <p class="typewriter">
              Is a web app which helps you to create, decorate, manage and
                customize your evetns at your own and in this
                we provide you our best services like
                <br />
                <span data-text="birthday events., wedding events., meetings., party setups., pool parties., photoshoot setups., and customized setups."></span>
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img className="img-fluid " src={eve} alt="" />
            </div>
          </div>



          <a  href="#up">
          <button className="moveup">
        <i class="fas fa-arrow-up"></i>
        </button></a>

        </div>


      </div>


    </>
  );
};

export default Fronttext;
