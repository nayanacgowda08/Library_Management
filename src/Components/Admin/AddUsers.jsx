// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import "../../assets/styles/addUser.css"

const AddUsers = () => {
  let userData = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    let readUser = {
    // id:'',
    fname:userData.current[0].value,
    lname:userData.current[1].value,
    dob:userData.current[2].value,
    email:userData.current[3].value,
    password:userData.current[4].value,
    contact:userData.current[5].value,
    place:userData.current[6].value,
    
    
   }

   console.log(readUser);
   fetch(`http://localhost:4000/users`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(readUser)
   })
  }
  return (
    <>
     <div className="addUser-container">
        <div className="addUser">
          <div>
            <form ref={userData} action="" onSubmit={handleSubmit} >
              <input type="text" placeholder="Enter first name" required />
              <input type="text" placeholder="Enter last name" />
              <input type="date" placeholder="Enter dob" />
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder="Enter password" />
              <input type="number" placeholder="Enter contact" />
              <input type="text" placeholder="Enter place name" />
              
              
              <div className="btn">
              <button>Add User</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddUsers