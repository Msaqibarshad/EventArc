import React, { useState } from 'react';
import './Footer.css';
const Footer = () => {
    const [userfooteremail, setuserfooteremail] = useState('');
    console.log(userfooteremail);
    return (
        <div>
            <div className="main4footer pt-5">
                <div className="container center4footer">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 width4footer my-3">
                            <a className='anchor4footer' href="https://www.google.com/maps/place/Webhp.solutions/@31.49155,74.375093,15z/data=!4m5!3m4!1s0x0:0x66664afd33ad07e6!8m2!3d31.4915503!4d74.3750928" target="_blank">
                                <div className="innerwidth">
                                    <i class="fas fa-globe-asia mb-3"></i>
                                    <p>33b Link 2 Super Town, Lahore, Punjab</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 width4footer my-3">
                            <a className='anchor4footer' href="tel:+923030649985">
                                <div className="innerwidth">
                                    <i class="fas fa-mobile mb-4"></i>
                                    <p >+923030649985</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 width4footer my-3">
                            <a className='anchor4footer' href="https://wa.me/+923030649985/?text=Tell me something about Eventarc?" target="_blank">
                                <div className="innerwidth">
                                    <i class="fab fa-whatsapp mb-4"></i>
                                    <p>+923030649985</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 width4footer my-3">
                            <a
                                className='anchor4footer'
                                href="mailto:eventarc4u@gmail.com" target="_blank">
                                <div className="innerwidth">
                                    <i class="fas fa-envelope mb-3"></i>
                                    <p >Eventarc4u
                                        @gmail.com</p></div>
                            </a>
                        </div>
                    </div>
                    <div className="row my-5 ">
                        <div className="col-lg-3 col-md-12 col-sm-12 footerlefttext">
                            <h5>EVENTARC</h5>
                            <p>Being The Best Event Management Company We Strive To Create High Quality And Out Of The Box Prodcutions For Our Clients. Check Out Our User Friendly Customizable 3d Modals And See For Yourself What Makes Us Stand Out. Supervise Every Detail Of Your Event From The Comfort Of Your Home.</p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 footermiddletext ">
                            <h5>IMPORTANT LINKS</h5>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>ORDER</li>
                            <li>CONOTACT</li>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center flex-column
                        ">
                            <div className='d-flex '>
                                <input value={userfooteremail} onChange={(e) => {
                                    setuserfooteremail(e.target.value);
                                }}
                                    type="text" placeholder='ENTER YOUR EMAIL' className='input4news' />
                                <button className='btn4news'>Subcribe</button>
                            </div>
                            <p className='newpara'>
                                GET OUR DISCOUNTED PLANS IN YOUR MAILBOX
                            </p>
                        </div>
                    </div>
                    <div className='d-flex my-3'>
                        <div className="leftsocial d-flex">
                            <div className='footersocial'>
                                <i class="fab fa-facebook-f "></i>
                            </div>
                            <div className='footersocial '>
                                <i class="fas fa-mail-bulk"></i>
                            </div>
                        </div>
                        <div className="leftsocial d-flex">
                            <div className='footersocial'>
                                <i class="fab fa-youtube"></i>
                            </div>
                            <div className='footersocial '>
                                <i class="fab fa-whatsapp"></i>
                            </div>
                        </div>
                        <div className="leftsocial d-flex">
                            <div className='footersocial'>
                                <i class="fab fa-instagram"></i>
                            </div>
                            <div className='footersocial '>
                                <i class="fas fa-search-location"></i>
                            </div>
                        </div>
                    </div>
                    <div className='footercopy my-3'>
                        <p>COPYRIGHT CLAIMS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer