import React,{useState} from "react";
import Header from "../Header/Header";
// import Hr from "../Hr/Hr";
import Hr2 from "../Hr2/Hr2";
import "./Contact.css";


const Contact = () => {
  const [contactpname, setcontactpname] = useState("");
  const [contactpphone, setcontactpphone] = useState("");
  const [contactpemail, setcontactpemail] = useState("");
  const [contactpmessge, setcontactpmessge] = useState("");

  const onvaluesubmitconatct = () =>{
    if (
      contactpname === "" ||
      contactpphone === "" ||
      contactpemail === "" ||
      contactpmessge === "" 
      
    ) {
      alert("Fill All The Fields")
      
    }
    else{
      const data = {
        contactpname,
        contactpphone,
        contactpemail,
        contactpmessge
        
      };
      fetch("/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then((res) => {
        console.log({ res });
          if (res.errors) {
            alert(res.errors[0].msg);
          } else {
            alert(res.success);
            clearcontactform();

          }
      })
      .catch((err) => {
        console.log({ err });
        alert("Error while get data from API", err);
      });
    }
  };

  const clearcontactform = () =>{
    setcontactpname("");
    setcontactpphone("");
    setcontactpemail("");
    setcontactpmessge("");
        
  }
  
  return (
    <div>
      <Header />
      <div className="main4contact py-5">
        <h3 className="maintext4contact">CONTACT US</h3>
        <Hr2 />

        <div className="container my-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 leftdiv4contact">
              <div><h3 className="heading4contact">FILL THE FORM <br />IT'S EASY</h3></div>
              

              <div className="innerchild4contact">
                <input value={contactpname} onChange={(e) => {
                  setcontactpname(e.target.value);
                }} className="input4contact" type="text" name="" id="" placeholder="Enter  First Name" />
                <input value={contactpphone} onChange={(e) => {
                  setcontactpphone(e.target.value);
                }} className="input4contact" type="number" name="" id="" placeholder="Enter Phone Number" />
              </div>
              <div>
                <input value={contactpemail} onChange={(e) => {
                  setcontactpemail(e.target.value);
                }} className="email4contact" type="email" name="" id="" placeholder="Enter Your Email" />
              </div>

              <div>
                <textarea value={contactpmessge} onChange={(e) => {
                  setcontactpmessge(e.target.value);
                }} className="mess4contact" name="" id="" placeholder="Enter Your Message "></textarea>
              </div>
              

              <div className="btns_for_contact">
              <button onClick={() => { onvaluesubmitconatct(); }}className="btn4contactleft">Send Message</button>
              <button onClick={clearcontactform} className="btn4contactleft">Clear Form</button>

              </div>





            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 rightdiv4contact">
              <h3 className="heading4contact">LET'S TALK ABOUT <br />EVERYTHING</h3>
              <p className="para4contact">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur doloremque illo quos omnis labore incidunt saepe dolorum dignissimos, vitae aut iure animi asperiores eius exercitationem quas. Quod placeat iste culpa.</p>


              <button className="btn4contact">
                <h5>Read more</h5>
                <i class="fas fa-long-arrow-alt-right mx-2"></i>
              </button>



            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
