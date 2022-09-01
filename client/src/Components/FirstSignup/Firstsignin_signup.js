import React from 'react';
import './First.css';
import {NavLink} from 'react-router-dom'

const Firstsignin_signup = () => {
  return (
    <div className='main_for_first_in_up'>

<div className='inner_for_first_in_up'>

Please identify yourself before ordering to us by using the
<NavLink exact to="/">
<span> SIGN IN </span>

</NavLink>

or
<NavLink exact to="/">
<span> SIGN UP </span>

</NavLink>


 option on the home page.
</div>


    </div>
  )
}

export default Firstsignin_signup