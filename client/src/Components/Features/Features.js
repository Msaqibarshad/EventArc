import React from 'react';
import './Features.css';
import payment from "./Images/onepay.png";
import time from "./Images/savetime.png";
import use from "./Images/easy.png";
import manage from "./Images/manage.png";
import platfrom from "./Images/oneplat.png";
import customize from "./Images/customize.png";
import Hr from "../Hr/Hr"

const Features = () => {
  return (
    <div>
        <div className="main4features py-4">

            <h2 className='text-center features'>FEATURES</h2>
            <Hr  />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="firstinner">
                            <div className="">
                            <img src={payment} alt=""  className='img-4-features'/>
                            </div>
                            <div className="contentinner">
                                <h4>ONLINE PAYMENT</h4>
                                <hr className='hrinner' />
                                <p>IN THIS PLATFROM IT IS EASY TO SEND YOU PATMENT THROUGH ONLINE WAYS.</p>
                            </div>
                        </div>
                        <div className="firstinner">
                            <div className="">
                            <img src={use} alt=""  className='img-4-features'/>

                            </div>
                            <div className="contentinner">
                                <h4>EASY TO USE</h4>
                                <hr className='hrinner' />
                                <p>IN THIS PLATFROM IT IS EASY TO SEND YOU PATMENT THROUGH ONLINE WAYS.</p>
                            </div>
                        </div>
                        <div className="firstinner">
                            <div className="">
                            <img src={platfrom} alt=""  className='img-4-features'/>

                            </div>
                            <div className="contentinner">
                                <h4>ONE PLATFORM</h4>
                                <hr className='hrinner' />
                                <p>IN THIS PLATFROM IT IS EASY TO SEND YOU PATMENT THROUGH ONLINE WAYS.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="firstinner">
                            <div className="">
                            <img src={time} alt=""  className='img-4-features'/>

                            </div>
                            <div className="contentinner">
                                <h4>TIME SAVING</h4>
                                <hr className='hrinner' />
                                <p>IN THIS PLATFROM IT IS EASY TO SEND YOU PATMENT THROUGH ONLINE WAYS.</p>
                            </div>
                        </div>
                        <div className="firstinner">
                            <div className="">
                            <img src={manage} alt=""  className='img-4-features'/>

                            </div>
                            <div className="contentinner">
                                <h4>EASY TO MANAGE</h4>
                                <hr className='hrinner' />
                                <p>IN THIS PLATFROM IT IS EASY TO SEND YOU PATMENT THROUGH ONLINE WAYS.</p>
                            </div>
                        </div>
                        <div className="firstinner">
                            <div className="">
                            <img src={customize} alt=""  className='img-4-features'/>

                            </div>
                            <div className="contentinner">
                                <h4>CUSTOMIZABILITY</h4>
                                <hr className='hrinner' />
                                <p>IN THIS PLATFROM IT IS EASY TO SEND YOU PATMENT THROUGH ONLINE WAYS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Features