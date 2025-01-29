import React, { useState } from "react";
import axios from "axios"; 
// import '../styles/create.css'
import Swal from 'sweetalert';
import Navbar from '../component/navbar'

function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
   
    const sendDetails = async (event) => {
        event.preventDefault();
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {title, body}
    );
    if( (title && body) && response.status === 201) {
        Swal.fire({
            title: "Good job!",
            text: "Post Created Successfully",
            icon: "Success",
        });
    }
    };

return (
    <>
    <Navbar/>
<form>
    <h2>Create Post</h2>
    <input type="text" placeholder="Enter title" value={title} onChange={(e) => {setTitle(e.target.value);}}/>
    <textarea value={body} onChange={(e) => {
        setBody(e.target.value);
    }}></textarea>

    <button onClick = {sendDetails}>Submit Post</button>
</form>
    </>
)}

export default CreatePost   