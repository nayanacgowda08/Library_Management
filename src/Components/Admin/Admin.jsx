// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  let emailField = useRef()
  let passField = useRef()
  let navigate = useNavigate();
   
  const handleAdminLogin = (e)=>{
      e.preventDefault();
      let emailInp = emailField.current; 
      let pswdInp = passField.current;
      console.log(emailInp);
      

      const credentials ={
        email :"admin@gmail.com",                                                                            
        password:"admin123"
      }
      let {email,password} = credentials;

      let err = "border:1px solid red"
      // condition to visit adminportal
      if(emailInp.value === email && pswdInp.value === password){
        navigate("/adminportal")
      }
      else{
        emailInp.style.cssText = err;
        pswdInp.style.cssText = err;
      }
  }

  return (
    <>
      <div className="admin-form" >
        <form action=""  onSubmit={handleAdminLogin}>
          <input  ref={emailField}
          type="email" placeholder="admin e-mail" name="" id="" />
          <input ref={passField}
           type="password" placeholder="Password" name="" id="" />
          <button>Admin Login</button>
        </form>
      </div>
    </>
  );
};

export default Admin;
                                                           