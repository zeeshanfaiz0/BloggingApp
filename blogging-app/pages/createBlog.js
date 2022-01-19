import { useState, useEffect } from "react";
import {db, storage} from '../firebase-config'
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Link from "next/link";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
export default function create() {
  
  const blogCollectionRef = collection(db,"blogs");
  const [blogData,setBlogData] = useState({
    author:"",
    title:"",
    description:"",
    content:"",
    url:"",
  })
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [progress, setProgress] = (0);
  const newBlog = async() =>{
    var today = new Date();
    today = Date.now();
    // addDoc(blogCollectionRef, {title: title,content:content,description:description,author:author, time:today, url:url})
  }
  const handleChange =(e)=>{
    if(e.target.files[0]){
      setImage(e.target.files[0]);
    }
  }
  const handleSubmit = () => {
    const uploadTask = ref(storage,`images/${image.name}`);
    const uploadImage = uploadBytesResumable(uploadTask,image)
    uploadImage.on("state_changed",(snapshot)=>{

      // const progressPercent = Math.round((snapshot.bytesTransferred  / snapshot.totalbytes)*100)
      // setProgress(progressPercent);
    },(err)=>{
      console.log(err)
    },()=>{
      setUrl(getDownloadURL(uploadImage.snapshot.ref))
      
      .then((url)=>{
        setTitle: "";
        setContent: "";
        setDescription:"";
        setUrl:"";
        setAuthor: "";
        addDoc(blogCollectionRef, {title: title,content:content,description:description,author:author, time:today, url:url})
        
        // const articleRef=collection(db, "Bookings")
      })
    }
    );
    
  }

  return (
    <>
        <h1>Create Blog</h1>
        <span>
          <label>Author</label>
          <input type="text" onChange={(event)=>{setAuthor(event.target.value)}}></input>
        </span>
        <span>
          <label>Title</label>
          <input type="text" placeholder="Title" onChange={(event)=>{setTitle(event.target.value)}}></input>
        </span>
        <span>
          <label>Description</label>
          <input type="text" onChange={(event)=>{setDescription(event.target.value)}}></input>
        </span>
        <span>
          <label>Content</label>
          <input type="text" onChange={(event)=>{setContent(event.target.value)}}></input>
        </span>
        <span>
          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleChange} name="image" id="file" />
          <button type="submit" onClick={handleSubmit}></button>
        </span>
      <button type="submit" onClick={newBlog}>/*<Link href="/allBLogs"><a>*/Submit/*</a></Link>*/</button>
    </>
  );
}
