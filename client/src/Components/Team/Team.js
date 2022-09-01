import React from 'react';
import Hr2 from '../Hr2/Hr2';
import './Team.css';
import saqib from "./Images/saqib.jpeg";
import anosha from "./Images/anosha.jpeg";
import atta from "./Images/atta.jpeg";

const Team = () => {
  return (
    <div>
        <div className="main4team py-5">
            <h2 className='text-center expert'>MEET OUR TEAM</h2>
            <Hr2/>

            {/* <div className="container">
               <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner4team">
                        <div className="forback">
                        <img src={saqib} alt="" />

                        <div className="overlay">
                            <h5>hello</h5>
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-whatsapp"></i>
                        <i class="fab fa-google-plus"></i></div>
                        </div>
                        <h5 className='mt-3'>MUHAMMAD SAQIB ARSHAD</h5>
                        <p>WEBSITE DEVELOPER</p>
                    </div>


                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="inner4team">
                <div className="forback">
                        <img src={saqib} alt="" />

                        <div className="overlay">
                        <h5>hello</h5>

                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-whatsapp"></i>
                        <i class="fab fa-google-plus"></i></div>
                        </div>

<h5 className='mt-3'>ANOSHA MEHDI</h5>
<p>UI/UX DESIGNER</p>
                </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="inner4team">
                <div className="forback">
                        <img src={saqib} alt="" />
                        <div className="overlay">
                        <h5>hello</h5>

                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-whatsapp"></i>
                        <i class="fab fa-google-plus"></i></div>
                        </div>
<h5 className='mt-3'>M ATTA UL MUSTAFA</h5>
<p>GRAPHICS AND 3D DESIGNER</p>
                </div>
                </div>
               </div>
            </div> */}
            <section id="team" class="team">
			<div class="container">
				<div class="row">
					<figure class="team-member col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms">
						<div class="member-thumb">
							<img src={saqib}alt="Team Member" class="img-responsive img-fluid"/>
							<figcaption class="overlay">
								{/* <h5>voluptatem quia voluptas </h5> */}
                                <p className='para4team'>WEBSITE DEVELOPER</p>
								<p className='para4team'>I'M SELF MOTIVATED AND HARDWORKERR</p>
								<div class="social-links ">
								<i class="fab fa-facebook"></i>
									<i class="fab fa-google-plus"></i>
									<i class="fab fa-whatsapp"></i>
								</div>
							</figcaption>
						</div>
						<h4 >MUHAMMAD  SAQIB ARSHAD</h4>
						{/* <span className='expert'>WEBSITE DEVELOPER</span> */}
					</figure>

					<figure class="team-member col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
						<div class="member-thumb">
							<img src={anosha}alt="Team Member" class="img-responsive img-fluid"/>
							<figcaption class="overlay">
                                <p className='para4team'>UI/UX DESIGNER</p>
							<p className='para4team'>I'M SELF MOTIVATED AND HARDWORKERR</p>
								<div class="social-links ">
								<i class="fab fa-facebook"></i>
									<i class="fab fa-google-plus"></i>
									<i class="fab fa-whatsapp"></i>
								</div>
							</figcaption>
						</div>

						<h4 >ANOSHA MEHDI</h4>
						{/* <span className='expert'>UI/UX DESIGNER</span> */}
					</figure>

					<figure class="team-member col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="600ms">
						<div class="member-thumb">
							<img src={atta} alt="Team Member" class="img-responsive img-fluid"/>
							<figcaption class="overlay">
                                <p className='para4team'>GRAPHIC AND 3D DESIGNER</p>
							<p className='para4team'>I'M SELF MOTIVATED AND HARDWORKERR</p>
								<div class="social-links ">
								<i class="fab fa-facebook"></i>
									<i class="fab fa-google-plus"></i>
									<i class="fab fa-whatsapp"></i>
								</div>
							</figcaption>
						</div>
						<h4 >M ATTA UL MUSTAFA</h4>
						{/* <span className='expert'>GRAPHIC AND 3D DESIGNER</span> */}
					</figure>




				</div>
			</div>
		</section>
        </div>



    </div>
  )
}

export default Team