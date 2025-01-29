import React, {useState,  useEffect} from 'react';
import Swal from "sweetalert2";

const EffectPage =()=> {
    const [count, setCount] = useState(0);

useEffect (()=>{
    //document.title = `You have clicked ${count} times`
    Swal.fire ({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
}, [count]);

return (
    <>
    <button onClick = {()=>setCount(count + 1)}>Click me!</button>
    </>
)}
export default EffectPage
