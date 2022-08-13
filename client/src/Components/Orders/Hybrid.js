import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Hr from "../Hr/Hr";

import "./Css/All-order.css";

const Hybrid = () => {
  const history = useHistory();
  function GetSelected() {
    var selected = new Array();

    var valuesofhybrid = document.getElementById("valuesofhybrid");

    var chks = valuesofhybrid.getElementsByTagName("INPUT");

    for (var i = 0; i < chks.length; i++) {
      if (chks[i].checked) {
        selected.push(chks[i].value);
      }

      if (
        selected[0] === "Birthday" &&
        selected[1] === "Pool" &&
        selected.length === 2
      ) {
        history.push("/first");
      } else if (selected[0] === "Birthday" && selected[1] === "Photo") {
        history.push("/second");
      } else if (selected[0] === "Pool" && selected[1] === "Photo") {
        history.push("/three");
      } else if (
        selected[0] === "Birthday" &&
        selected[1] === "Pool" &&
        selected[2] === "Photo" &&
        selected.length === 3
      ) {
        history.push("/four");
      }
    }

    if (selected.length < 2) {
      alert("Please Select atleast 2 Setups");
    } else {
    }
  }

  return (
    <div>
      <div className="main-4-customization " id="valuesofhybrid">
        <p className="para-4-customization">
          Here You Can Select More Than One Event <br /> For Better Experience
        </p>
        <Hr />

        <div className="inner-4-hybrid">
          <label for="setup1"> BirthDay</label>
          <br />

          <input
            className="check"
            type="checkbox"
            id="setup1"
            name="birthday"
            value="Birthday"
          />
        </div>
        <div className="inner-4-hybrid">
          <label for="setup1"> Pool</label>
          <br />

          <input
            className="check"
            type="checkbox"
            id="setup1"
            name="birthday"
            value="Pool"
          />
        </div>
        <div className="inner-4-hybrid">
          <label for="setup1"> Photography</label>
          <br />

          <input
            className="check"
            type="checkbox"
            id="setup1"
            name="birthday"
            value="Photo"
          />
        </div>

        <div className="inner-4-hybrid">
          <NavLink exact to="/allsetups">
            <input className="btn-for-hybrid" type="button" value="Cancel" />
          </NavLink>
        </div>
        <div className="inner-4-hybrid">
          <input
            className="btn-for-hybrid"
            type="button"
            onClick={GetSelected}
            value="Next"
          />
        </div>
      </div>
    </div>
  );
};

export default Hybrid;
