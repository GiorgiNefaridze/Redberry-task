import { useState, useEffect, useRef } from "react";
import { RedberryApi } from "../../api/RedberryApi";

import UploadImgMobile from "../../images/upld-img-mobile.png";
import WarningError from "../../images/error-mob.png";
import PopUp from "../PopUp/PopUp";

import "./LaptopDatails.scss";

export default function LaptopDatails({ setNextSection }) {
  const [allBrands, setAllBrands] = useState([]);
  const [allCpus, setAllCpus] = useState([]);

  const [uploaded, setUploaded] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [image, setImage] = useState();
  const [showPopUp, setShowPopUp] = useState(false);

  const [laptopName, setLaptopName] = useState("");
  const [laptopBrand, setLaptopBrand] = useState({});
  const [cpu, setCpu] = useState("");
  const [cpuCore, setCpuCore] = useState("");
  const [cpuStream, setCpuStream] = useState("");
  const [laptopRam, setLaptopRam] = useState("");
  const [memoryType, setMemoryType] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [laptopSituation, setLaptopSituation] = useState("");

  const inputRef = useRef();
  const laptopNameValidationRef = useRef();
  const dateValidationRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    getBrands();
    getCpus();
  }, []);

  const getBrands = async () => {
    const { data } = await RedberryApi.get("/brands").catch((err) =>
      console.log(err)
    );
    setAllBrands(data.data);
  };

  const getCpus = async () => {
    const { data } = await RedberryApi.get("cpus").catch((err) =>
      console.log(err)
    );
    setAllCpus(data.data);
  };

  const submitLaptopDetailSection = async (e) => {
    e.preventDefault();

    if (!image) {
      setUploadError(true);
      return;
    }

    if (
      !localStorage.getItem("laptopName") ||
      !localStorage.getItem("laptopBrand") ||
      !localStorage.getItem("cpu") ||
      !localStorage.getItem("cpuCore") ||
      !localStorage.getItem("cpuStream") ||
      !localStorage.getItem("laptopRam") ||
      !localStorage.getItem("memoryType") ||
      !localStorage.getItem("price") ||
      !localStorage.getItem("laptopSituation")
    ) {
      return;
    }

    if (
      !/^[a-zA-Z+0-9!@#$%^&*()_+=]+$/.test(
        laptopName || localStorage.getItem("laptopName")
      )
    ) {
      return;
    }

    if (!/^[0-9+/]*$/.test(date)) {
      return;
    }

    const employeeSet = {
      name: localStorage.getItem("name"),
      surname: localStorage.getItem("lastName"),
      team_id: JSON.parse(localStorage.getItem("direction")).id,
      position_id: JSON.parse(localStorage.getItem("position")).id,
      phone_number: localStorage.getItem("number"),
      email: localStorage.getItem("email"),
      token: "56894b83e0d3b7a61ffc0e261560a53e",

      laptop_name: localStorage.getItem("laptopName"),
      laptop_image: image,
      laptop_brand_id: JSON.parse(localStorage.getItem("laptopBrand")).id,
      laptop_cpu: localStorage.getItem("cpu"),
      laptop_cpu_cores: Number(localStorage.getItem("cpuCore")),
      laptop_cpu_threads: Number(localStorage.getItem("cpuStream")),
      laptop_ram: Number(localStorage.getItem("laptopRam")),
      laptop_hard_drive_type: localStorage.getItem("memoryType"),
      laptop_state: localStorage.getItem("laptopSituation"),
      laptop_purchase_date: Number(localStorage.getItem("date")) || "",
      laptop_price: Number(localStorage.getItem("price")),
    };

    console.log(employeeSet)

    const form = new FormData();

    for (let key in employeeSet) {
      form.append(key, employeeSet[key]);
    }

    // const response = await RedberryApi.post("/laptop/create", form);

    // if (response) {
    //   setShowPopUp(true);
    // }
  };

  const uploadImage = (e) => {
    setImage(e.target.files[0]);
    setUploaded(true);
  };

  return (
    <div className="EmployeeInformation-laptop-details">
      <form
        onSubmit={(e) => submitLaptopDetailSection(e)}
        className="EmployeeInformation-laptop-details-inner"
        ref={formRef}
      >
        {!uploadError ? (
          <div
            className={
              uploaded
                ? "EmployeeInformation-laptop-details-inner-img-upload-section success"
                : "EmployeeInformation-laptop-details-inner-img-upload-section"
            }
          >
            <input
              ref={inputRef}
              onChange={(e) => uploadImage(e)}
              id="upload-image"
              type="file"
              name="myfile"
            />
            <span style={{ color: uploaded ? "rgb(53, 168, 53)" : "#62a1eb" }}>
              ჩააგდე ან ატვირთე ლეპტოპის ფოტო
            </span>
            <span
              className="upload-image-mobile"
              style={{ color: uploaded ? "rgb(53, 168, 53)" : "#62a1eb" }}
            >
              ლეპტოპის ფოტოს ატვირთვა
            </span>
            <label
              style={{
                backgroundColor: uploaded ? "rgb(53, 168, 53)" : "#62a1eb",
              }}
              htmlFor="upload-image"
            >
              {!uploaded ? "ატვირთე" : "ატვირთულია"}
            </label>
            <label className="upload-image-mob" htmlFor="upload-image">
              <img src={UploadImgMobile} alt="upload-button" />
            </label>
          </div>
        ) : (
          <div
            className={
              uploaded
                ? "EmployeeInformation-laptop-details-inner-img-upload-section success"
                : "EmployeeInformation-laptop-details-inner-img-upload-section error"
            }
          >
            {!uploaded && <img src={WarningError} alt="warning icon" />}
            <input
              ref={inputRef}
              onChange={(e) => uploadImage(e)}
              id="upload-image"
              type="file"
            />
            <span style={{ color: uploaded ? "rgb(53, 168, 53)" : "#E52F2F" }}>
              ჩააგდე ან ატვირთე ლეპტოპის ფოტო
            </span>
            <span
              className="upload-image-mobile"
              style={{ color: uploaded ? "rgb(53, 168, 53)" : "red" }}
            >
              ლეპტოპის ფოტოს ატვირთვა
            </span>
            <label
              style={{
                backgroundColor: uploaded ? "rgb(53, 168, 53)" : "#E52F2F",
              }}
              htmlFor="upload-image"
            >
              {!uploaded ? "ატვირთე" : "ატვირთულია"}
            </label>
            <label className="upload-image-mob" htmlFor="upload-image">
              <img src={UploadImgMobile} alt="upload" />
            </label>
          </div>
        )}
        <div className="EmployeeInformation-laptop-details-inner-laptop-name">
          <div className="EmployeeInformation-laptop-details-inner-laptop-name-input">
            <label htmlFor="laptop-name">ლეპტოპის სახელი</label>
            <input
              id="laptop-name"
              type="text"
              value={localStorage.getItem("laptopName") || laptopName}
              onChange={(e) => {
                let inp = e.target.value;
                if (!/^[a-zA-Z+0-9!@#$%^&*()_+= ]+$/.test(inp) && inp !== "") {
                  laptopNameValidationRef.current.style.color = "red";
                } else {
                  laptopNameValidationRef.current.style.color = "black";
                }
                localStorage.setItem("laptopName", inp);
                setLaptopName(inp);
              }}
            />
            <span ref={laptopNameValidationRef}>
              ლათინური ასოები, ციფრები, !@#$%^&*()_+={" "}
            </span>
          </div>
          <select
            value={
              JSON.parse(localStorage.getItem("laptopBrand"))?.name ||
              laptopBrand.name
            }
            onChange={(e) => {
              let brand = {
                name: e.target.value,
                id: e.target.options.selectedIndex,
              };
              localStorage.setItem("laptopBrand", JSON.stringify(brand));
              setLaptopBrand(brand);
            }}
          >
            <option value="ლეპტოპის ბრენდი" hidden>
              ლეპტოპის ბრენდი
            </option>
            {allBrands?.map((brand) => (
              <option key={brand.id}>{brand.name}</option>
            ))}
          </select>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-laptop-details">
          <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-cpu">
            <select
              value={localStorage.getItem("cpu") || cpu}
              onChange={(e) => {
                let inp = e.target.value;
                localStorage.setItem("cpu", inp);
                setCpu(inp);
              }}
            >
              <option value="CPU" hidden>
                CPU
              </option>
              {allCpus?.map((cpu) => (
                <option key={cpu.id}>{cpu.name}</option>
              ))}
            </select>
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-cpu-core">
              <label htmlFor="core">CPU-ს ბირთვი</label>
              <input
                value={localStorage.getItem("cpuCore") || cpuCore}
                onChange={(e) => {
                  let inp = e.target.value;
                  localStorage.setItem("cpuCore", inp);
                  setCpuCore(inp);
                }}
                id="core"
                type="number"
              />
              <span>მხოლოდ ციფრები</span>
            </div>
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-cpu-stream">
              <label htmlFor="stream">CPU-ს ნაკადი</label>
              <input
                value={localStorage.getItem("cpuStream") || cpuStream}
                onChange={(e) => {
                  let inp = e.target.value;
                  localStorage.setItem("cpuStream", inp);
                  setCpuStream(inp);
                }}
                id="stream"
                type="number"
              />
              <span>მხოლოდ ციფრები</span>
            </div>
          </div>
          <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory">
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory-input">
              <label htmlFor="ram">ლეპტოპის RAM (GB)</label>
              <input
                value={localStorage.getItem("laptopRam") || laptopRam}
                onChange={(e) => {
                  let inp = e.target.value;
                  localStorage.setItem("laptopRam", inp);
                  setLaptopRam(inp);
                }}
                id="ram"
                type="number"
              />
              <span>მხოლოდ ციფრები</span>
            </div>
            <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory-type">
              <label>მეხსიერების ტიპი</label>
              <div className="EmployeeInformation-laptop-details-inner-laptop-details-about-memory-type-radios">
                <div>
                  <input
                    value="SSD"
                    onChange={(e) => {
                      localStorage.setItem("memoryType", e.target.value);
                      setMemoryType(e.target.value);
                    }}
                    name="memory-type"
                    id="SSD"
                    type="radio"
                    checked={localStorage.getItem("memoryType") === "SSD"}
                  />
                  <label htmlFor="SSD">SSD</label>
                </div>
                <div>
                  <input
                    value="HDD"
                    onChange={(e) => {
                      localStorage.setItem("memoryType", e.target.value);
                      setMemoryType(e.target.value);
                    }}
                    name="memory-type"
                    id="HDD"
                    type="radio"
                    checked={localStorage.getItem("memoryType") === "HDD"}
                  />
                  <label htmlFor="HDD">HDD</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-laptop-price">
          <div className="EmployeeInformation-laptop-details-inner-laptop-price-date">
            <label htmlFor="date">შეძენის რიცხვი (არჩევითი)</label>
            <div>
              <input
                value={localStorage.getItem("date") || date}
                onChange={(e) => {
                  let inp = e.target.value;
                  if (!/^[0-9+/]*$/.test(inp) && inp !== "") {
                    dateValidationRef.current.style.border = "1.8px solid red";
                  } else {
                    dateValidationRef.current.style.border =
                      "1.8px solid #8ac0e2";
                  }
                  localStorage.setItem("date", inp);
                  setDate(inp);
                }}
                id="date"
                type="text"
                placeholder="დდ/თთ/წწწწ"
                ref={dateValidationRef}
              />
            </div>
          </div>
          <div className="EmployeeInformation-laptop-details-inner-laptop-price-laptop-price">
            <label htmlFor="price">ლეპტოპის ფასი</label>
            <div>
              <input
                value={localStorage.getItem("price") || price}
                onChange={(e) => {
                  let inp = e.target.value;
                  localStorage.setItem("price", inp);
                  setPrice(inp);
                }}
                id="price"
                type="number"
                placeholder="0000"
              />
            </div>
            <span>მხოლოდ ციფრები</span>
          </div>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-brand-new-or-not">
          <label>ლეპტოპის მდგომარეობა</label>
          <div className="EmployeeInformation-laptop-details-inner-brand-new-or-not-radios">
            <div>
              <input
                value="new"
                onChange={(e) => {
                  localStorage.setItem("laptopSituation", e.target.value);
                  setLaptopSituation(e.target.value);
                }}
                name="new-or-not"
                id="brand-new"
                type="radio"
                checked={localStorage.getItem("laptopSituation") === "new"}
              />
              <label htmlFor="brand-new">ახალი</label>
            </div>
            <div>
              <input
                value="used"
                onChange={(e) => {
                  localStorage.setItem("laptopSituation", e.target.value);
                  setLaptopSituation(e.target.value);
                }}
                name="new-or-not"
                id="secondary"
                type="radio"
                checked={localStorage.getItem("laptopSituation") === "used"}
              />
              <label htmlFor="secondary">მეორადი</label>
            </div>
          </div>
        </div>
        <div className="EmployeeInformation-laptop-details-inner-buttons">
          <a href="" onClick={() => setNextSection(false)}>
            უკან
          </a>
          <button>დამახსოვრება</button>
        </div>
      </form>
      {showPopUp && <PopUp />}
    </div>
  );
}
