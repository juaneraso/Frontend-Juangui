import axios from "axios";
import { useState } from "react";

const Form = () =>{

  const [form,setForm]= useState({
     email:"",
     name:"",
     phone:""
     
  });

  const[errors,setErrors] = useState({
    email:"",
    name:"",
    phone:""

  })

  const changeHandler = (event) =>{
    const property = event.target.name;
    const value = event.target.value;
    setForm({...form,[property]:value});

    validate({...form,[property]:value});

  }

  const validate = (form) =>{

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)){ 
        setErrors({...errors,email:""});
     }else{
        setErrors({...errors,email:"Hay un error en el email"});
     }
    
     if(form.email===""){

        setErrors({...errors,email:"Email vacio"});
     }


    };
  
     const submitHandler = (event) =>{
     event.preventDefault();
     console.log("Form",form);    

     const response =   axios.post("https://render-backend-bqi5.onrender.com/users",form)
     .then(res=>alert(res))
     .catch(err=>alert(err));

     }
 return(<>
   <form onSubmit={submitHandler}>

     <div> 
       <label>Email:</label>
       <input type = "text" value={form.email} onChange={changeHandler} name="email"></input>
       <span>{errors.email}</span>
     </div>

     <div> 
       <label>Name:</label>
       <input type = "text" value={form.name} onChange={changeHandler} name="name"></input>
     </div>
   
     <div> 
       <label>Phone:</label>
       <input type = "text" value={form.phone} onChange={changeHandler}name="phone"></input>
     </div>
   
     <button type="submit">SUBMIT</button>
   

   </form>

 </>)

};


export default Form;