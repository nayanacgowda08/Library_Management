// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/addBooks.css";
import axios from "axios";

const AddBooks = () => {
 let formData = useRef();
 let [newId,setNewId]=useState()
 useEffect(()=>{
  axios.get(`http://localhost:4000/books`).then(rep=>setNewId(rep.data))
 },[newId])

 let idVal = ()=>{
  let nId = Number(newId[newId.length-1].id)
  return nId+1;
 }
const handleSubmit = (e) => {
  e.preventDefault();
  let newId = idVal()

  let readBook = {
  id:String(newId),
  title:formData.current[0].value,
  isbn:formData.current[1].value,
  pageCount:formData.current[2].value,
  thumbnailUrl:formData.current[3].value,
  shortDescription:formData.current[4].value,
  longDescription:formData.current[5].value,
  status:formData.current[6].value,
  authors:[formData.current[7].value],
  categories:formData.current[8].value,
 }
 console.log(readBook);
 fetch(`http://localhost:4000/books`,{
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(readBook)
 })
}
  return (
    <>
      <div className="addbooks-container">
        <div className="addBooks">
          <div>
            <form ref={formData} action="" onSubmit={handleSubmit} >
              <input type="text" placeholder="Enter title name" />
              <input type="number" placeholder="Enter Registration No." />
              <input type="number" placeholder="Enter pagecount" />
              <input type="text" placeholder="Enter Image url" />
              {/* shortdes */}
              <input type="text" placeholder="Enter Short Desc" />
              {/* long des */}
              <input type="text" placeholder="Enter long Desc" />
              <input type="text" placeholder="Enter status" />
              <input type="text" placeholder="Enter Author name" />
              <input type="text" placeholder="Enter categories" />
              <div className="btn">
              <button>Add Book</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBooks;
