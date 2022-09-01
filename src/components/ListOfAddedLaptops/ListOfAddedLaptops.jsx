import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RedberryApi } from "../../api/RedberryApi";

import GoBack from "../../images/go-back.png";
import GoBackMobile from "../../images/go-back-mobile.png";

import "./ListOfAddedLaptops.scss";

const apiAddress = "https://pcfy.redberryinternship.ge/"

export default function ListOfAddedLaptops() {
  const [laptops, setLaptops] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getListOfLaptops();
  }, []);

  const getListOfLaptops = async () => {
    const { data } = await RedberryApi.get(
      "/laptops?token=56894b83e0d3b7a61ffc0e261560a53e"
    );

    setLaptops(data.data);
  };

  return (
    <div className="ListOfAddedLaptops">
      <div className="ListOfAddedLaptops-header">
        <img
          title="უკან დაბრუნება"
          onClick={() => navigate(-1)}
          src={GoBack}
          alt="go-back"
        />
        <img
          className="ListOfAddedLaptops-header-mobile-go-back"
          title="უკან დაბრუნება"
          onClick={() => navigate(-1)}
          src={GoBackMobile}
          alt="go-back"
        />
        <h1>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</h1>
      </div>
      <div className="ListOfAddedLaptops-content">
        {laptops.map((laptop) => (
          <div
            key={laptop.laptop.id}
            className="ListOfAddedLaptops-content-laptop-wrapper"
          >
            <div className="ListOfAddedLaptops-content-laptop-wrapper-block">
              <div className="ListOfAddedLaptops-content-laptop-wrapper-block-img-section">
                <img src={apiAddress + laptop.laptop.image} alt="laptop" />
              </div>
              <div className="ListOfAddedLaptops-content-laptop-wrapper-block-content-section">
                <h2>{laptop.user.name + laptop.user.surname}</h2>
                <h4>{laptop.laptop.name}</h4>
                <span onClick={() => navigate("/laptop-info", {state: {id: laptop.laptop.id}})}>მეტის ნახვა</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
