import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="home__container">
        <section className="home__container__title">
          <h2> Интерактивный Калькулятор</h2>
          <span>
            Рассчитайте влияние вашего образа жизни на окружающую среду и
            получите рекомендации по снижению углеродного отпечатка.
          </span>
          <Link to="/calculator">
            <Button
              style={{ position: "relative", top: "100px", right: "75px" }}
            >
              Перейти
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Home;

