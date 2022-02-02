import {  useState } from "react";
import Codecontext from "./CodeContext";
import React  from 'react';
import { useNavigate } from "react-router-dom";
const CodeState = (props) => {
  let navigate = useNavigate();
  // const host = "http://localhost:5000";
  const host="https://neilcodesboombackend.herokuapp.com"

  const [fetched_codeds, setfetched_codeds] = useState([]);
  const [fetched_codecpp, setfetched_codecpp] = useState([]);

  //Loading DS Notes


  const admin_post=async(user,pass)=>{
    const response = await fetch(`${host}/admin`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
       body: JSON.stringify({user,pass})
    });

    let got_response = await response.json();
    if(got_response.success==="true"){

      localStorage.setItem("admin","true");
      document.getElementById("boomnotadmin").innerHTML="";
      navigate("/");

  }else{
          document.getElementById("boomnotadmin").innerHTML="Boom Boom Boom , You are not an Admin";
  }
}
    


  

  const LoadNotesDS = async (a) => {
    // a.preventDefault();
    const response = await fetch(`${host}/api/notes/ds`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
      //  body: JSON.stringify({"code":code_text.code[0]})
    });

    let fetched_codes = await response.json();

    setfetched_codeds(fetched_codes);
  };

  //Loading CPP Notes

  const LoadNotesCPP = async (a) => {
    // a.preventDefault();
    const response = await fetch(`${host}/api/notes/cpp`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // cors, *no-cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // body data type must match "Content-Type" header
      //  body: JSON.stringify({"code":code_text.code[0]})
    });

    let fetched_codes = await response.json();

    setfetched_codecpp(fetched_codes);
  };

  const editCodeDs=async(code,title,description,_id)=>{
    // const auth_token=localStorage.getItem('authtoken');

    // API call
    await fetch(`${host}/api/notes/ds`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-no-cors, *no-cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      
       
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
       body: JSON.stringify({hlo:code,title,description,_id})
    });

    
    let newcode=fetched_codeds.slice();
    // console.log(id)
    for (let index = 0; index < newcode.length; index++) {
      const element = newcode[index];
      // console.log(element._id)
      
      // if(element._id===id){
        newcode[index].title=title;
        newcode[index].description=description;
        newcode[index].code=code;
        
        
        break;
      // }
    }
 
    setfetched_codeds(newcode);



  }

    const editCodecpp=async(code,title,description,_id)=>{
      // const auth_token=localStorage.getItem('authtoken');
  
      // API call
      await fetch(`${host}/api/notes/cpp`, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-no-cors, *no-cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
        
         
        },
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({hlo:code,title,description,_id})
      });

    
    let newcode=fetched_codecpp.slice();
    // console.log(id)
    for (let index = 0; index < newcode.length; index++) {
      const element = newcode[index];
      // console.log(element._id)
      
      // if(element._id===id){
        newcode[index].title=title;
        newcode[index].description=description;
        newcode[index].code=code;
        
        
        break;
      // }
    }
 
    setfetched_codecpp(newcode);
    
  }





  const deleteCodeds=async(_id)=>{
    

    
      await fetch(`${host}/api/notes/ds`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-no-cors, *no-cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
    
       
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
       // body data type must match "Content-Type" header
       body: JSON.stringify({_id})
    });

    // client side delete
    let newnote=fetched_codeds.filter((note)=>{return note._id!==_id})
    setfetched_codeds(newnote);
  }


  
  const deleteCodecpp=async(_id)=>{
    

    
    await fetch(`${host}/api/notes/cpp`, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-no-cors, *no-cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
  
     
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     // body data type must match "Content-Type" header
     body: JSON.stringify({_id})
  });

  // client side delete
  let newnote=fetched_codecpp.filter((note)=>{return note._id!==_id})
  setfetched_codecpp(newnote);
}







  return(
    <Codecontext.Provider value={{fetched_codeds,fetched_codecpp,LoadNotesCPP,LoadNotesDS,host,editCodeDs,editCodecpp,deleteCodecpp,deleteCodeds,admin_post}}>
        {props.children}
    </Codecontext.Provider>
    )


};

export default CodeState
