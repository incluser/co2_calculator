import AIFC from "../../assets/AIFC.jpeg";
import LangMenu from "../../features/LangMenu";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__container">
      <div className="header__container__">
        <div className="header__container__flex">
          <div className="header__container__home_icon">
            <Link to="https://aifc.kz/ru/">
              <img className="home_icon" src={AIFC} alt="" />
            </Link>
          </div>

          <div className="header__container__actions">
            <LangMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
