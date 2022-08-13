import React from 'react';
import './About.css';
import Hr2 from '../Hr2/Hr2';
import saqib from './Images/saqib.jpeg';
import anosha from './Images/anosha.jpeg';
import atta from './Images/atta.jpeg';
import Header from '../Header/Header'



const About = () => {
  return (
    <div>
        <Header/>
        <div className="main4about py-5">

            <div className="container df4about">
                <h3 className='miantext4about'>ABOUT US</h3>
                <Hr2/>
                <p className='para4about'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis esse, ut, enim ad quae accusantium optio perspiciatis magni obcaecati ipsam maiores error sed dignissimos eligendi, nobis deserunt. Iste eveniet enim accusamus, fugit quisquam repudiandae nostrum, deserunt deleniti, laudantium culpa saepe! Eius, ad, sapiente possimus autem ipsam omnis voluptate qui voluptas, labore fugiat eos architecto sed </p>

                <div className="row w-100">
                    <div className="col-lg-4 col-md-4 col-sm-12 direction4about">

                        <div className="innerdiv4about1">
                            <div className="innerchild4about">
                                <img src={saqib} alt="" />
                            </div>

                        </div>
                        <h5 className='title4about mt-5'>M SAQIB ARSHAD</h5>
                    <div className="social4about">
<div className="iconsocial4about">
<i class="fab fa-facebook-f"></i>
</div>
<div className="iconsocial4about">
<i class="fas fa-at"></i>
</div><div className="iconsocial4about">
<i class="fab fa-linkedin-in"></i>
</div>
                    </div>
                        

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 direction4about">
                    <div className="innerdiv4about2">
                    <div className="innerchild4about">
                        <img src={anosha} alt="" />
                    </div>
                    </div>
                    <h5 className='title4about mt-5'>ANOSHA MEHDI</h5>
                    <div className="social4about">
<div className="iconsocial4about">
<i class="fab fa-facebook-f"></i>
</div>
<div className="iconsocial4about">
<i class="fas fa-at"></i>
</div><div className="iconsocial4about">
<i class="fab fa-linkedin-in"></i>
</div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 direction4about">
                    <div className="innerdiv4about3">
                    <div className="innerchild4about">
                        <img src={atta} alt="" />
                    </div>
                    </div>
                    <h5 className='title4about mt-5'>M ATTA UL MUSTAFA</h5>
                    <div className="social4about">
<div className="iconsocial4about">
<i class="fab fa-facebook-f"></i>
</div>
<div className="iconsocial4about">
<i class="fas fa-at"></i>
</div><div className="iconsocial4about">
<i class="fab fa-linkedin-in"></i>
</div>
                    </div>
                    </div>
                </div>

                

            </div>
        </div>
        


    </div>
  )
}

export default About