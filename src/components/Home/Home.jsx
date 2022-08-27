import { useNavigate } from "react-router-dom";

import HomeLogo from "../../images/mainPage.png";
import RedberryLogo from "../../images/redberry-logo.png";

import "./Home.scss";

export default function Home() {

  const navigate = useNavigate()

  const navigateToEmployeeInformation = () => {
    navigate("/employee-information")
  }

  return (
    <div className="Home">
      <div className="Home-logos">
        <img src={RedberryLogo} />
        <img src={HomeLogo} />
      </div>
      <div className="Home-buttons">
        <button onClick={() => navigateToEmployeeInformation()}>ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
        <button>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</button>
      </div>
    </div>
  );
}
