import React from 'react';
import Hr from '../Hr/Hr';
import './Faq.css';

const Faq = () => {
  return (
    <div>
        <div className="mian4faq py-5">
            <h2 className='text-center text4faq'>FRESQUENTLY ASKED QUESTIONS</h2>
            <div className="my-2">
            <Hr/>
            </div>


<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button  faqaccordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        WHAT IS EVENTARC?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Being The Best Event Management Company We Strive To Create High Quality And Out Of The Box Prodcutions For Our Clients. Check Out Our User Friendly Customizable 3d Modals And See For Yourself What Makes Us Stand Out. Supervise Every Detail Of Your Event From The Comfort Of Your Home.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class=" faqaccordion accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        WHY SHOULD YOU CHOOSE US?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        EventArc is a Dynamic event organizing WebApp which allows you to completely customize your events From the comfort of your home.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button faqaccordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        WHICH PAYMENT METHODS ARE USED BY EVENTARC?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        We use different methods to get payments, these are as follows:
        <br />
        1. Cash on delivery.
        <br />
        2. Easypaisa.
        <br />
3. Jazzcash
<br />
4. Nayapay
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button faqaccordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        HOW IS EVENTARC DIFFERENT FORM OTHERS?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        The main features of EventArc are Customization and Hybernization feature which allows the user to customize their event with the help of 2D models.This way the user can completely control the event's environment without actually being there.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button faqaccordion collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        WHERE ARE WE LOCATED?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        33B link 2, Super town, Lahore, Punjab.
      </div>
    </div>
  </div>



</div>

</div>
    </div>
  )
}

export default Faq