import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import usuario from "../../assets/usuario.png";

const CardDos = (props) => {
  return (
    <>
      <Card style={{ width: "12rem" }}>
        <Card.Img
          variant="top"
          src={usuario}
          style={{ width: "100%", height: "200px" }}
        />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Email:{props.email}</Card.Text>
          <Card.Text>Phone:{props.phone}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardDos;
