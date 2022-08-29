import { useState } from "react";

import "./LaptopDatails.scss";

export default function LaptopDatails({ setNextSection }) {
  const [uploaded, setUploaded] = useState(false);
  const [base64Format, setBase64Format] = useState("")

  const submitLaptopDetailSection = (e) => {
    e.preventDefault();
  };

  const uploadImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload = function() {
        setBase64Format(reader.result)
    }

    setUploaded(true);
  };


  return (
    <div className="EmployeeInformation-laptop-details">
      <form
        onSubmit={(e) => submitLaptopDetailSection(e)}
        className="EmployeeInformation-laptop-details-inner"
      >
        <div
          className={
            uploaded
              ? "EmployeeInformation-laptop-details-inner-img-upload-section success"
              : "EmployeeInformation-laptop-details-inner-img-upload-section"
          }
        >
          <input onChange={(e) => uploadImage(e)} id="upload-image" type="file" />
          <span style={{ color: uploaded ? "rgb(53, 168, 53)" : "black" }}>
            ჩააგდე ან ატვირთე ლეპტოპის ფოტო
          </span>
          <label
            style={{
              backgroundColor: uploaded ? "rgb(53, 168, 53)" : "#62a1eb",
            }}
            htmlFor="upload-image"
          >
            {!uploaded ? "ატვირთე" : "ატვირთულია"}
          </label>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-laptop-name">
          <div className="EmployeeInformation-laptop-details-inner-laptop-name-input">
            <label htmlFor="laptop-name">ლეპტოპის სახელი</label>
            <input id="laptop-name" type="text" />
            <span>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
          </div>
          <select>
            <option value="ლეპტოპის ბრენდი">ლეპტოპის ბრენდი</option>
          </select>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-laptop-details">
          <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-cpu">
            <select>
              <option value="CPU">CPU</option>
            </select>
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-cpu-core">
              <label htmlFor="core">CPU-ს ბირთვი</label>
              <input id="core" type="number" />
              <span>მხოლოდ ციფრები</span>
            </div>
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-cpu-stream">
              <label htmlFor="stream">CPU-ს ნაკადი</label>
              <input id="stream" type="number" />
              <span>მხოლოდ ციფრები</span>
            </div>
          </div>
          <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory">
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory-input">
              <label htmlFor="ram">ლეპტოპის RAM (GB)</label>
              <input id="ram" type="number" />
              <span>მხოლოდ ციფრები</span>
            </div>
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory-type">
              <label>მეხსიერების ტიპი</label>
              <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory-type-radios">
                <div>
                  <input name="memory-type" id="ssd" type="radio" />
                  <label htmlFor="ssd">SSD</label>
                </div>
                <div>
                  <input name="memory-type" id="hdd" type="radio" />
                  <label htmlFor="hdd">HDD</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-laptop-price">
          <div className="EmployeeInformation-laptop-details-inner-laptop-price-date">
            <label htmlFor="date">შეძენის რიცხვი (არჩევითი)</label>
            <div>
              <input id="date" type="text" placeholder="დდ/თთ/წწწწ" />
            </div>
          </div>
          <div className="EmployeeInformation-laptop-details-inner-laptop-price-laptop-price">
            <label htmlFor="price">ლეპტოპის ფასი</label>
            <div>
              <input id="price" type="number" placeholder="0000" />
            </div>
            <span>მხოლოდ ციფრები</span>
          </div>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-brand-new-or-not">
          <label>ლეპტოპის მდგომარეობა</label>
          <div className="EmployeeInformation-laptop-details-inner-brand-new-or-not-radios">
            <div>
              <input name="new-or-not" id="brand-new" type="radio" />
              <label htmlFor="brand-new">ახალი</label>
            </div>
            <div>
              <input name="new-or-not" id="secondary" type="radio" />
              <label htmlFor="secondary">მეორადი</label>
            </div>
          </div>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-buttons">
          <a onClick={() => setNextSection(false)}>უკან</a>
          <button>დამახსოვრება</button>
        </div>
      </form>
    </div>
  );
}
