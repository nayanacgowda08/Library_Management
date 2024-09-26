// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import '../assets/styles/books.css'
import { useNavigate } from "react-router-dom";

const Books = () => {
  let [books, setBooks] = useState([]);

  // Fetching the books data
  useEffect(() => {
    axios.get("http://localhost:4000/books").then((resp) => {
      setBooks(resp.data);
    });
  }, [books]);
  let navigate = useNavigate()
  let handleRead = (id) => {
    navigate(`/adminportal/readbook/${id}`);
  }

  // delete the books

  let handleDeleteBook =  (id,title)=>{
    let bool = window.confirm(`Are you sure you want to delete ${title}'s data permanently..?`)
    if(bool){
      // setBooks( books.filter((book)=>book.id!==id))
    fetch(`http://localhost:4000/books/${id}`, { method: 'DELETE'} )
    alert(`Book is deleted`)
    }
    else{
      alert(`${title} book is not deleted`);
    }
  }

  return (
    <>
      <div className="books">
        {books.map((elem, ind) => {
          let {id,title, thumbnailUrl, isbn, pageCount, status, authors, categories } = elem;
          return (
            <div key={ind} className="cards">
              <div className="image">
                <div><img src={thumbnailUrl} alt="Loading.." /></div>
                <div className="title">{title}</div>
              </div>
              <div className="details">
                <div className="title">{title}</div>
                {/* Display book details */}
                <div className="book">
                  <table  cellSpacing={10} >
                    
                      <tr>
                        <th>Title:</th>
                        <td>{title}</td>
                       
                      </tr>
                   
                 
                      <tr>
                        <th>isbn:</th>
                        <td>{isbn}</td>
                  
                      </tr>
                      <tr>
                        <th>PageCount:</th>
                        <td>{pageCount}</td>
                      </tr>

                      <tr>
                        <th>Status</th>
                        <td>{status}</td>
                      </tr>

                      <tr>
                        <th>Authors:</th>
                        <td>{authors}</td>
                      </tr>

                      <tr>
                        <th>Categories:</th>
                        <td>{categories}</td>
                      </tr>
                  
                  </table>
                </div>
                <div className="last">
                {/* <div className="add-books"></div> */}
                <button onClick={()=>handleRead(id)}
                 className="read-book">Read Books</button>
                <button onClick={()=>handleDeleteBook(id,title)}
                className="delete">Delete</button>
              </div>
              </div>
              
            </div>
          )
        })}
      </div>
    </>
  );
};

export default Books;
