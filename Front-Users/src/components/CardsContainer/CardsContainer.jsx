import CardDos from "../Card/Card";

import { useSelector } from "react-redux";

const CardsContainer = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
      {users.map((user) => {
        return (
          <CardDos
            key={user.id}
            id={user.id}
            name={user.name}
            phone={user.phone}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
