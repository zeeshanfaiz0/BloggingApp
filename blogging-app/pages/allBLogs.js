import { useState, useEffect } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from '../firebase-config'
// import { async } from "@firebase/util";
export default function () {
    const [blogs,setBlogs] = useState([]);
    const blogCollectionRef = collection(db,"blogs");
    useEffect(()=>{
        const getBlogs = async () =>{
            const data = await getDocs(blogCollectionRef);
            setBlogs(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        }
        getBlogs();
    },[])
    return (
        <div>
            {blogs.map((blog)=>{
                return (
                    <div>
                        <h1>{blog.id}</h1>
                        <h1>{blog.author}</h1>
                        <h2>{blog.title}</h2>
                        <h2>{blog.content}</h2>
                        <h2>{blog.description}</h2>
                        <h2>{blog.time}</h2>
                    </div>
                )
            })}
        </div>
    )
}