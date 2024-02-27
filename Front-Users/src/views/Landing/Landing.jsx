import React from "react";
import Atropos from "atropos/react";
import Crud from "../../assets/Crud.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Atropos>
      <div style={{ height: "800px", position: "relative" }}>
        <img
          src={Crud}
          alt="Imagen"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "white",
          }}
        >
          <Link to="/home">
            <Button className="btn btn-success" variant="secondary" size="lg">
              INGRESAR
            </Button>
          </Link>
        </div>
      </div>
    </Atropos>
  );
};

export default Landing;
