import { useEffect} from "react";
import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { getUsers } from "../../redux/actions";


const Home = () =>{

   const dispatch = useDispatch();

  useEffect(()=>{
   
   dispatch(getUsers()); 
  },[dispatch]);

  return( 
    <div>
     <h1>Estoy en Home</h1>
     <CardsContainer/>
    </div>
  ) 

 
}

export default Home;