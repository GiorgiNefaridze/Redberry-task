import { useNavigate } from "react-router-dom";

import PopUpImg from "../../images/success-popup.png";

import "./PopUp.scss";

export default function PopUp() {
  const naviagte = useNavigate();

  return (
    <div className="popup">
      <img src={PopUpImg} />
      <h2>ჩანაწერი დამატებულია!</h2>
      <div className="popup-buttons">
        <button>სიაში გადაყვანა</button>
        <a onClick={() => naviagte("/")}>მთავარი</a>
      </div>
    </div>
  );
}
