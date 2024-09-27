import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

// Variable de entorno

const back = import.meta.env.VITE_APP_BACK;

// export const getUsers = () => {
//   return async function (dispatch) {
//     try {
//       const apiData = await axios.get(
//         "http://localhost:3001/users/"
//         // "https://render-backend-bqi5.onrender.com/users"
//       );
//       const users = apiData.data;
//       dispatch({ type: GET_USERS, payload: users });
//     } catch (error) {
//       alert("algo salio mal");
//       console.log("Error", error);
//     }
//   };
// };


export const getUsers = () => {
  return async function (dispatch) {
    try {
      const apiData = await fetch(`${back}/users`);
      if (!apiData.ok) {
        throw new Error(`HTTP error! Status: ${apiData.status}`);
      }

      const users = await apiData.json();

      dispatch({ type: GET_USERS, payload: users });
    } catch (error) {
      alert("algo salio mal");
      console.log("Error", error);
    }
  };
};

export const getUser = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = apiData.data;
    dispatch({ type: GET_USER, payload: user });
  };
};
