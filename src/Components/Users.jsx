// eslint-disable-next-line no-unused-vars
import React, { useState , useEffect} from 'react'
import "../assets/styles/users.css"
import { useNavigate } from 'react-router-dom'

const Users = () => {
  let [users,setUsers]=useState([])
  let navigate = useNavigate()
 
  useEffect(()=>{
    let fetchApi = async ()=>{
      let res = await fetch(`http://localhost:4000/users`);
      let data = await res.json();
      setUsers(data);
      // console.log(data)
  }
  fetchApi();
  },[users])

  let handleDeleteUser =  (id,fname,lname)=>{
    let bool = window.confirm(`Are you sure you want to delete ${fname} ${lname}'s data permanently..?`)
    if(bool){
      // setBooks( books.filter((book)=>book.id!==id))
    fetch(`http://localhost:4000/users/${id}`, { method: 'DELETE'} )
    // alert(`User Data is deleted`)
    }
    else{
      alert(`${fname} ${lname} user's  is not deleted`);
    }
  }

  let navigateaddUser = ()=>{
    navigate('/adminportal/addusers')
  }

  const deleteAllUsers = async () => {
    let bool = window.confirm(`Are you sure you want to delete all the data..?`);
    
    if (bool) {
      
      for (let user of users) {
        await fetch(`http://localhost:4000/users/${user.id}`, {
          method: 'DELETE'
        });
      }
      setUsers([]);
      alert('All user data has been deleted.');
    } else {
      alert("Not deleted");
    }
  };
  

  return (
    <>
    <div className="user-container" >
      <div className="head">
        {users.length!==0?
        <table >
        <thead style={{
          padding: "10px",
        }}>
          <tr>
            <th>Slno.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Dob</th>
            <th>Age</th>
            <th>email</th>
            <th>password</th>
            <th>Contact</th>
            <th>Place</th>
            <th>Delete</th>
          </tr>
          <tr>
            <th colSpan={5}><button>Add Users</button></th>
            <th colSpan={5}><button onClick={deleteAllUsers}
             >Delete All</button></th>
          </tr>
        </thead>
        <tbody >
          {/* populate data dynamically here */}
          {users.map((user,index)=>{
            let {id,fname,lname,dob,contact,place,email,password}=user;
            let dateObj = new Date();
            let age = dateObj.getFullYear() - Number(dob.slice(0,4));
            return(
              
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{fname}</td>
                  <td>{lname}</td>
                  <td>{dob}</td>
                  <td>{age}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                  <td>{contact}</td>
                  <td>{place}</td>
                  <td>
                    <button className='btn-user' onClick={()=>handleDeleteUser(id,fname,lname)}
                    >Delete</button>
                  </td>
                </tr>
             
            )
          })}
        </tbody>
      </table> :
      <>
        <div className="adduser-cont">
        <h1>No data found...</h1>
        <button onClick={navigateaddUser}
        >Add User</button>
        </div>
      </>  
      }
      </div>
    </div>
    </>
  )
}

export default Users

// useLocation