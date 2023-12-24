import { useState } from "react";

const Form = () =>{

  const [form,setForm]= useState({
     email:"",
     name:"",
     phone:""
     
  });


  const changeHandler = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    setForm({...form,[property]:value});

  }

 return(<>
   <form>

     <div> 
       <label>Email:</label>
       <input type = "text" value={form.email} onChange={changeHandler} name="email"></input>
     </div>

     <div> 
       <label>Name:</label>
       <input type = "text" value={form.name} onChange={changeHandler} name="name"></input>
     </div>
   
     <div> 
       <label>Phone:</label>
       <input type = "text" value={form.phone} onChange={changeHandler}name="phone"></input>
     </div>
   
   
   

   </form>

 </>)

};


export default Form;