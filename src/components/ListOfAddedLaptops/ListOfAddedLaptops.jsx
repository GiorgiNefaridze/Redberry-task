import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RedberryApi } from "../../api/RedberryApi";

import EmptyBox from "../../images/empty-box.svg";
import GoBack from "../../images/go-back.png";
import GoBackMobile from "../../images/go-back-mobile.png";

import "./ListOfAddedLaptops.scss";

const apiAddress = "https://pcfy.redberryinternship.ge/";

const ListOfAddedLaptops = () => {
  const [laptops, setLaptops] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getListOfLaptops();
  }, []);

  const getListOfLaptops = async () => {
    const { data } = await RedberryApi.get(
      "/laptops?token=3f89eec14265588c88a36edf0442f862"
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
      {laptops.length >= 1 ? (
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
                  <h2>{laptop.user.name + " " + laptop.user.surname}</h2>
                  <h4>{laptop.laptop.name}</h4>
                  <span
                    onClick={() =>
                      navigate("/laptop-info", {
                        state: { id: laptop.laptop.id },
                      })
                    }
                  >
                    მეტის ნახვა
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ListOfAddedLaptops-empty-section">
          <img src={EmptyBox} alt="empty-page" />
          <h1>კონტენტრი ცარიელია</h1>
        </div>
      )}
    </div>
  );
};

export default ListOfAddedLaptops;
