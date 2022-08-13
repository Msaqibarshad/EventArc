import React from 'react';
import './Custom.css';
import Table from "./Images/table.png";
import Curtain from "./Images/curtainnew.jpg"


const BirthdayCustom = () => {
  const fordispalycurtain = () =>{
    document.getElementById('curtain').style.display = "block";
    
  }
  const fordispalytable = () =>{
    
    document.getElementById('table').style.display = "block";
  }

  return (
    <div>


        <div className="main_for_custom_birthday">
          <img className='Curtain' id='curtain' src={Curtain} alt="" />
          <img className='tabel_img' id='table' src={Table} alt="" />


        </div>
        <div className="lower_btns_for_custom_birthday">
            <div className="link_for_img"
            onClick={fordispalytable}>
              Table
            </div>
            <div className="link_for_img" onClick={fordispalycurtain}>Curtain</div>
            <div className="link_for_img">Lights</div>
            <div className="link_for_img">Flags</div>
            <div className="link_for_img">Cake</div>
            <div className="link_for_img">Black</div>
            <div className="link_for_img">Blue</div>
            <div className="link_for_img">Silver</div>
            <div className="link_for_img">Green</div>
            <div className="link_for_img">Pinks</div>
            <div className="link_for_img">Light</div>
            <div className="link_for_img">Red</div>
        </div>
    </div>
  )
}

export default BirthdayCustom