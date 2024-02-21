import axios from "axios";
import { useState } from "react";

const Form = () => {
  const back = import.meta.env.VITE_APP_BACK;

  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });

    validate({ ...form, [property]: value });
  };

  const validate = (form) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) {
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Hay un error en el email" });
    }

    if (form.email === "") {
      setErrors({ ...errors, email: "Email vacio" });
    }
  };

  //  const submitHandler = (event) =>{
  //  event.preventDefault();
  //  console.log("Form",form);

  // //  const response =   axios.post("https://render-backend-bqi5.onrender.com/users",form)

  //  const response =   axios.post("http://localhost:3001/",form)
  //  .then(res=>alert(res))
  //  .catch(err=>alert(err));

  //  }

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("Form", form);

    //  const response =   axios.post("https://render-backend-bqi5.onrender.com/users",form)
    try {
      const response = await fetch(`${back}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetch POST Response:", data);
    } catch (error) {
      console.error("Fetch POST Error:", error.message);
    }

    //  alert("Creado con exito");
  };

  return (
    <div className="bg-secondary">
      <form onSubmit={submitHandler}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={form.email}
            onChange={changeHandler}
            name="email"
          ></input>
          <span>{errors.email}</span>
        </div>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
          ></input>
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={form.phone}
            onChange={changeHandler}
            name="phone"
          ></input>
        </div>

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// const FormDos = () => {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default FormDos;
