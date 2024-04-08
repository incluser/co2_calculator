import { Button } from "@chakra-ui/react";
import Fly from "../../features/Fly";
import "./style.css";
import React from "react";
const Flights = () => {
  const [flight, setFlight] = React.useState([{}]);
  return (
    <div className="flight">
      <div className="flight_container">
        {flight.map(() => {
          return <Fly />;
        })}
      </div>

      <Button className="flight_add" onClick={() => setFlight([...flight, {}])}>
        Add Flight
      </Button>
    </div>
  );
};

export default Flights;
