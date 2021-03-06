import { useState } from "react";
import {Link }from 'react-router-dom'
function Navbar({loginHandler,login}) {
  
  return (
    <nav>
      <Link to='/'> <li> Home </li></Link>
      <Link to='/aboutUs'> <li> About Us  </li></Link>
      <Link to='/Profiles'> <li> profiles </li></Link>
      
      <button
        className='login'
        onClick={loginHandler}
        style={login ? {} : { backgroundColor: "#f15b31" }}
      >
        {" "}
        {login ? "Logout " : "Login"}{" "}
      </button>
    </nav>
  );
}

export default Navbar;
