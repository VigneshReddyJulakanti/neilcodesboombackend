import { handle } from 'express/lib/application';
import React from 'react';

export default function code_plate(props) {
  return(
      <>
<div className='container my-3'>
<div className="form-floating">

  <div className="card-body">
    <div className='d-flex  align-items-center'style={{"position":"relative" , "left":"-7px"}}>
    <h5 className="card-title mx-2" style={{"text-align":"left"}}>{props.title}</h5>
    {localStorage.getItem("admin")?<span><i className="fas fa-edit mx-3 " onClick={()=>{props.handle_edit(props.single_codes)}}></i>
    <i className="fas fa-trash " onClick={()=>{props.delete_code(props._id)}}></i></span> :   <p></p> }</div>
    <p className="card-text">{props.description}</p>
   
  </div>

  <textarea name='code' className="form-control"  placeholder="Leave a comment here" id="floatingTextarea2"  style={{"height": "400px"}} value={props.code}>
      
  </textarea>
  
</div>
</div>
<hr></hr>
      </>
  );
}
