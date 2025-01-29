import React from 'react';
// import '../styles/navbar.css'
import { Link } from "react-router-dom";



function Navbar(){
    return(
       <>
       <div className = "nav">
        <h2>Joanna Enoch</h2>
        <div className = "opt">
            <Link to ='/' className='link'>Home</Link>
            <Link to ='/contact' className='link'>Contact</Link>
            <Link to ='/service' className='link'>Service</Link>
            <Link to ='/state' className='link'>State</Link>
            <Link to ='/post' className='link'>Post</Link>
            <Link to ='/get' className='link'>Get</Link>
            <Link to ='/weather' className='link'>Weather</Link>
        </div>
       </div>
       </>

    )
}
export default Navbar