import React ,{useState} from 'react';
import { useContext } from 'react';
import Codecontext from '../context/codes/CodeContext';

export default function Add_code() {
    const context =useContext(Codecontext)

    const [code_text, setcode_text ] = useState({code:"",title:"",description:""});

    const hadleonchange=(e)=>{
        setcode_text({...code_text,[e.target.name]:[e.target.value]})
    }


    const handlesend=async(a)=>{


        console.log(code_text)
        console.log(code_text.code[0])
        a.preventDefault();

        let sub = await document.getElementById("inputGroupSelect01").value;

        const response = await fetch(`${context.host}/api/notes/${sub}`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          // mode: 'cors', // cors, *no-cors, same-origin
          // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          // credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
           
          },
          // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"code":code_text.code[0],"title":code_text.title[0],"description":code_text.description[0]})
        });
    
      }

  return(
      <>

<div className='container'>
  

<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input name="title" onChange={hadleonchange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input name="description" onChange={hadleonchange} className="form-control" id="exampleInputPassword1"/>
  </div>

  <textarea name='code' className="form-control"  placeholder="Leave a comment here" id="floatingTextarea2" onChange={hadleonchange} style={{"height": "100px"}}></textarea>

  <div className="input-group mb-3">
  <label className="input-group-text" htmlFor="inputGroupSelect01subject">Subject</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="ds">DS</option>
    <option value="cpp">Python</option>
    
  </select>
</div>

  <button className='btn btn-primary my-3' onClick={handlesend}>Send</button>
</form>


</div>
      
      
      </>
  );
}
