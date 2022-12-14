import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { RedberryApi } from "../../api/RedberryApi";

import GoBack from "../../images/go-back.png";
import GoBackMobile from "../../images/go-back-mobile.png";

import "./EachEmployeeWholeSection.scss";

const apiAddress = "https://pcfy.redberryinternship.ge/";

const EachEmployeeWholeSection = () => {
  const [laptopInfo, setLaptopInfo] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getLaptopDetails = async () => {
      const { data } = await RedberryApi.get(
        `/laptop/${location.state.id}?token=3f89eec14265588c88a36edf0442f862`
      );
  
      setLaptopInfo(data.data);
    };
    
    getLaptopDetails();
  }, [location]);

  return (
    <div className="each-employee-whole-section">
      <div className="each-employee-whole-section-header">
        <img
          className="each-employee-whole-section-header-go-back"
          onClick={() => navigate(-1)}
          title="უკან დაბრუნება"
          src={GoBack}
          alt="go-back"
        />
        <img
          className="each-employee-whole-section-header-go-back-mob"
          onClick={() => navigate(-1)}
          title="უკან დაბრუნება"
          src={GoBackMobile}
          alt="go-back"
        />
        <h2>ᲚᲔᲞᲢᲝᲞᲘᲡ ᲘᲜᲤᲝ</h2>
      </div>
      <div className="each-employee-whole-section-content">
        <div className="each-employee-whole-section-content-employee-details">
          <div className="each-employee-whole-section-content-employee-details-image">
            <img src={apiAddress + laptopInfo?.laptop?.image} alt="laptop" />
          </div>
          <div className="each-employee-whole-section-content-employee-details-inner">
            <div>
              <p>სახელი:</p>
              <span>{laptopInfo?.user?.name}</span>
            </div>
            <div>
              <p>თიმი:</p>
              <span>{laptopInfo?.user?.team_id}</span>
            </div>
            <div>
              <p>პოზიცია:</p>
              <span>{laptopInfo?.user?.position_id}</span>
            </div>
            <div>
              <p>მეილი:</p>
              <span>{laptopInfo?.user?.email}</span>
            </div>
            <div>
              <p>ტელ.ნომერი:</p>
              <span>{laptopInfo?.user?.phone_number}</span>
            </div>
          </div>
        </div>
        <div className="each-employee-whole-section-content-laptop-details">
          <div className="each-employee-whole-section-content-laptop-details-laptop-info">
            <div>
              <p>ლეპტოპის სახელი:</p>
              <span>{laptopInfo?.laptop?.name}</span>
            </div>
            <div>
              <p>ლეპტოპის ბრენდი:</p>
              <span>{laptopInfo?.laptop?.brand_id}</span>
            </div>
            <div>
              <p>RAM:</p>
              <span>{laptopInfo?.laptop?.ram}</span>
            </div>
            <div>
              <p>მეხსიერების ტიპი:</p>
              <span>{laptopInfo?.laptop?.hard_drive_type}</span>
            </div>
          </div>
          <div className="each-employee-whole-section-content-laptop-details-cpu-info">
            <div>
              <p>CPU:</p>
              <span>{laptopInfo?.laptop?.cpu?.name}</span>
            </div>
            <div>
              <p>CPU-ს ბირთვი:</p>
              <span>{laptopInfo?.laptop?.cpu?.cores}</span>
            </div>
            <div>
              <p>CPU-ს ნაკადი:</p>
              <span>{laptopInfo?.laptop?.cpu?.threads}</span>
            </div>
          </div>
        </div>
        <div className="each-employee-whole-section-content-extra-details">
          <div>
            <div>
              <p>ლეპტოპის მდგომარეობა:</p>
              <span>{laptopInfo?.laptop?.state}</span>
            </div>
            <div>
              <p>ლეპტოპის ფასი:</p>
              <span>
                {laptopInfo?.laptop?.price}
              </span>
            </div>
          </div>
          <div>
            <div>
              <p>შევსების რიცხვი:</p>
              <span>{laptopInfo?.laptop?.purchase_date || "თარიღი არ არის მითითებული"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachEmployeeWholeSection;
