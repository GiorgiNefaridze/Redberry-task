import { useNavigate } from "react-router-dom";

import HomeLogo from "../../images/mainPage.png";
import RedberryLogo from "../../images/redberry-logo.png";
import HomeMobileLogo from "../../images/home-mobile.png";

import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="Home-logos">
        <img
          className="Home-logos-redberry"
          src={RedberryLogo}
          alt="redberry"
        />
        <img className="Home-logos-mobile" src={HomeMobileLogo} alt="go-back" />
        <img className="Home-logos-desktop" src={HomeLogo} alt="go-back" />
      </div>
      <div className="Home-buttons">
        <button onClick={() => navigate("/employee-information")}>
          ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </button>
        <button onClick={() => navigate("/laptop-list")}>
          ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ
        </button>
      </div>
    </div>
  );
}

export default Home