import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin_login() {

    const navigate=useNavigate();
    const handleSubmit=(a)=>{
        a.preventDefault();
        if(document.getElementById("exampleInputEmail1usernameadmin").value===(process.env.ADMIN_ID || "boom") && document.getElementById("exampleInputPassword1adminpassword").value===( process.env.ADMIN_PASS || "1426") ){
            localStorage.setItem("admin","true");
            document.getElementById("boomnotadmin").innerHTML="";
            navigate("/");

        }else{
                document.getElementById("boomnotadmin").innerHTML="Boom Boom Boom , You are not an Admin";
        }
    }

    
  return (<>
  
<div className='container'>
  <form>
  <div className="mb-3 my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input className="form-control" id="exampleInputEmail1usernameadmin" aria-describedby="emailHelp"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1adminpassword"/>
  </div>
 
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>

<p className='my-3' id="boomnotadmin"></p>
</div>
  </>)
}
