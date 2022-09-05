import React,{useState} from 'react';
import './Custom.css';




const BirthdayCustom = () => {
const [tbtn, settbtn] = useState(false);
const [cbtn, setcbtn] = useState(false);
const [sbtn1, setsbtn1] = useState(false);
const [sbtn2, setsbtn2] = useState(false);
const [sbtn3, setsbtn3] = useState(false);
const [sbtn4, setsbtn4] = useState(false);
const [sbtn5, setsbtn5] = useState(false);


const tbtnfun = () =>{
  settbtn(true);
}
const cbtnfun = () =>{
  setcbtn(true);
}
const sbtnfun1 = () =>{
  setsbtn1(true);
}
const sbtnfun2 = () =>{
  setsbtn2(true);
}
const sbtnfun3 = () =>{
  setsbtn3(true);
}
const sbtnfun4 = () =>{
  setsbtn4(true);
}
const sbtnfun5 = () =>{
  setsbtn5(true);
}

  return (
    <div className='main_for_birthday_custom'>

<div className="inner_div1_for_custom_birthday">

</div>
<div className="inner_div2_for_custom_birthday">

<div className="new_div">

  {
    sbtn1 ? <>
    <div className="options_table">
    <div className="first_option1">
      Select

    </div>
    <div className="first_option2">
   UnSelect

    </div>
  </div>
    </> :
    <>
    </>


  }

<div className="inner_child_for_custom_birthday1" onClick={sbtnfun1}>


    </div>
    <label htmlFor="">Room Walls</label>
</div>

<div className="new_div">

{
    sbtn2 ? <>
    <div className="options_table">
    <div className="first_option1">
      Select

    </div>
    <div className="first_option2">
   UnSelect

    </div>
  </div>
    </> :
    <>
    </>


  }
<div className="inner_child_for_custom_birthday2" onClick={sbtnfun2}>


    </div>
    <label htmlFor="">Back Curtain</label>
</div>
<div className="new_div">

{
    sbtn3 ? <>
    <div className="options_table">
    <div className="first_option1">
      Select

    </div>
    <div className="first_option2">
   UnSelect

    </div>
  </div>
    </> :
    <>
    </>


  }
<div className="inner_child_for_custom_birthday3" onClick={sbtnfun3}>


    </div>
    <label htmlFor="">Cake Table</label>
</div>
<div className="new_div">
  {

tbtn ? <>

<div className="options_table">
    <div className="first_option1">
      Table 01

    </div>
    <div className="first_option2">
    Table 02

    </div>
  </div>
</>
: <>

</>

  }

<div className="inner_child_for_custom_birthday4" onClick={tbtnfun}>


    </div>
    <label htmlFor="">Guest Table</label>
</div>
<div className="new_div">

  {
    cbtn ? <>
    <div className="options_table">
    <div className="first_option1">
      Cake 01

    </div>
    <div className="first_option2">
    Cake 02

    </div>
  </div>
    </>

    : <>

    </>
  }


<div className="inner_child_for_custom_birthday5" onClick={cbtnfun}>


    </div>
    <label htmlFor="">Cake</label>
</div>
<div className="new_div">

{
    sbtn4 ? <>
    <div className="options_table">
    <div className="first_option1">
      Select

    </div>
    <div className="first_option2">
   UnSelect

    </div>
  </div>
    </> :
    <>
    </>


  }
<div className="inner_child_for_custom_birthday6" onClick={sbtnfun4}>


    </div>
    <label htmlFor="">Ballons</label>
</div>

<div className="new_div">

{
    sbtn5 ? <>
    <div className="options_table">
    <div className="first_option1">
      Select

    </div>
    <div className="first_option2">
   UnSelect

    </div>
  </div>
    </> :
    <>
    </>


  }
<div className="inner_child_for_custom_birthday7" onClick={sbtnfun5}>


    </div>
    <label htmlFor="">Birthday Spelling</label>
</div>



</div>


    </div>
  )
}

export default BirthdayCustom