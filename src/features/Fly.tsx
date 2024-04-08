import "./Fly.css";
import MyMenu from "./Menu";
import FlyUp from "../assets/takeoff-the-plane-svgrepo-com.png";
import FlyDown from "../assets/image.png";
import Flight from "../assets/image copy.png";
import Star from "../assets/image copy 2.png";
import Queue from "../assets/image copy 3.png";
import { Input } from "@chakra-ui/react";
const Fly = () => {
  return (
    <div className="flight_card">
      <div className="first_row">
        <div className="from">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img style={{ width: "20px" }} src={FlyUp} alt="" />
            <span className="from_span">From</span>
          </div>

          <MyMenu types={["a"]} />
        </div>
        <div className="to">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img style={{ width: "20px" }} src={FlyDown} alt="" />
            <span>To</span>
          </div>
          <MyMenu types={["a"]} />
        </div>
        <span className="close__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
          </svg>
        </span>
      </div>
      <div className="second_row">
        <div className="flight">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img style={{ width: "20px" }} src={Flight} alt="" />
            <span>Flight</span>
          </div>
          <MyMenu types={["a"]} />
        </div>
        <div className="class">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img src={Star} style={{ width: "20px" }} alt="" />
            <span>Class</span>
          </div>
          <MyMenu types={["a"]} />
        </div>
        <div className="passengers">
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <img src={Queue} style={{ width: "20px" }} alt="" />
            <span>Passengers</span>
          </div>
          <Input bg="#f2f2f2" type="number" placeholder="Amount" />
        </div>
      </div>
    </div>
  );
};

export default Fly;
