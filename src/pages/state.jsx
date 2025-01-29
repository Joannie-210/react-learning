import React, { useState } from "react";
// import React from "react";
import Navbar from '../component/navbar'
// import '../styles/state.css'

function State () {
  const[color, setColor] = useState("red");
    return (
    <>
    <Navbar/>
<body style = {{background: color, width: "100vw", height: "100vh"}}>
<button onClick = {()=> setColor( color==="red" ? "green" : "red")}>Click me</button>
</body>
    </>
    )
}
export default State