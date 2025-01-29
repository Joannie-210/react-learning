import React, { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from '../component/navbar'

function GetPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
const fetchUsers = async()=>{
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(response.data);
};
fetchUsers();  
}, []);

return (
   
    <>
     <Navbar/>
    <h1>All Posts</h1>
    <ol>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
    </>
)
}
export default GetPosts