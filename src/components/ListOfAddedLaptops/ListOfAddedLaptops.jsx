import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RedberryApi } from "../../api/RedberryApi";

import test from "../../images/test.jpg";
import GoBack from "../../images/go-back.png";
import GoBackMobile from "../../images/go-back-mobile.png";

import "./ListOfAddedLaptops.scss";

export default function ListOfAddedLaptops() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   getListOfLaptops();
  // }, []);

  // const getListOfLaptops = async () => {
  //   const { data } = await RedberryApi.get("/laptops?token=7d9c8c8d269de69e63d5995062942424");

  //   console.log(data);
  // };

  const laptops = [
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
    { src: test, name: "giorgi's laptop", fullName: "giorgi nefaridzd" },
  ];

  return (
    <div className="ListOfAddedLaptops">
      <div className="ListOfAddedLaptops-header">
        <img title="უკან დაბრუნება" onClick={() => navigate(-1)} src={GoBack} alt="go-back" />
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
        {laptops.map((laptop, idx) => (
          <div key={idx} className="ListOfAddedLaptops-content-laptop-wrapper">
            <div className="ListOfAddedLaptops-content-laptop-wrapper-block">
              <div className="ListOfAddedLaptops-content-laptop-wrapper-block-img-section">
                <img src={laptop.src} alt="laptop" />
              </div>
              <div className="ListOfAddedLaptops-content-laptop-wrapper-block-content-section">
                <h2>{laptop.fullName}</h2>
                <h4>{laptop.name}</h4>
                <span>მეტის ნახვა</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
