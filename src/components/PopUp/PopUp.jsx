import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PopUpImg from "../../images/success-popup.png";

import "./PopUp.scss";

const keys = [
  "date",
  "laptopRam",
  "laptopName",
  "cpu",
  "cpuCore",
  "cpuStream",
  "price",
  "number",
  "name",
  "lastName",
  "position",
  "direction",
  "email",
  "laptopSituation",
  "laptopBrand",
  "memoryType",
];

const PopUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    keys.forEach((key) => localStorage.removeItem(key));
  }, []);

  return (
    <div className="popup">
      <img src={PopUpImg} alt="congrats-icon" />
      <h2>ჩანაწერი დამატებულია!</h2>
      <div className="popup-buttons">
        <button onClick={() => navigate("/laptop-list")}>
          სიაში გადაყვანა
        </button>
        <span onClick={() => navigate("/")}>მთავარი</span>
      </div>
    </div>
  );
}

export default PopUp