import React from 'react';
import Hr2 from '../Hr2/Hr2';
import './Plan.css'
// import cake from './Images/birthday.png';
// import party from './Images/dance.png';
// import camera from './Images/photography.png';

const Plan = () => {
  return (
    <div>
        
        <div className="mian4plan py-5" id='plan'>
            <h2 className='text-center text4paln'>OUR PLANS</h2>
            <Hr2 />
            <div className="container ">
             <div className="row ">
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="carddiv">
            
            <div className="uppertext4card">
                BIRTHDAY PLAN
            </div>
            <img className='img4cardplan'  alt="" />
            <h4>Price Rs. 10,000/-</h4>
            <p>IN THIS WE WILL PROVIDE YOU</p>
            <p>10 Person Sitting Arrangement</p>
            <p>20 Ballons</p>
            <p>2 Pound Cake</p>
            <p>2 Large Pizza</p>
            <p>5 Zinger Burger</p>
            <p>2 2.15 Ltrs. Cool Drinks </p>
            <p>Decoration</p>
            <a href="">Get An Offer <span>&#8594;</span></a>

             </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="carddiv2">
            
            <div className="uppertext4card">
                PARTY PLAN
            </div>
            <img className='img4cardplan'  alt="" />
            <h4>Price Rs. 15,000/-</h4>
            <p>IN THIS WE WILL PROVIDE YOU</p>
            <p>20 Person Sitting Arrangement</p>
            <p>Pool</p>
            <p>Cool Drinks</p>
            <p>Chicken Biryani</p>
            <p>Chicken Plao</p>
            <p>
                Fully DJ Setup </p>
            <p>Parking Availability</p>
            <a href="">Get An Offer <span>&#8594;</span></a>

             </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                <div className="carddiv">
            
            <div className="uppertext4card">
                PHOTOGRAPHY PLAN
            </div>
            <img className='img4cardplan'  alt="" />
            <h4>Price Rs. 5,000/-</h4>
            <p>IN THIS WE WILL PROVIDE YOU</p>
            <p>Total 20 Photos</p>
            <p>5 Outdoor Shoots</p>
            <p>5 Random Shoots</p>
            <p>10 Indoor Shoots</p>
            <p>Edited Photos</p>
            <p>Snacks </p>
            <p>Cool Drinks</p>
            <a href="">Get An Offer <span>&#8594;</span></a>

             </div>
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Plan