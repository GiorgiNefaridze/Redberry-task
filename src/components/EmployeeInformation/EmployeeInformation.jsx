import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LaptopDatails from "../LaptopDatails/LaptopDatails";

import GoBack from "../../images/go-back.png";

import "./EmployeeInformation.scss";

//validation
const redberryMailValidation = "redberry.ge";
const georgianPhoneNumCode = "995";

export default function EmployeeInformation() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [direction, setDirection] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nextSection, setNextSection] = useState(false);

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      localStorage.getItem("name") === "" ||
      localStorage.getItem("name").length < 2 ||
      localStorage.getItem("lastName") === "" ||
      localStorage.getItem("lastName").length < 2 ||
      localStorage.getItem("direction") === null ||
      localStorage.getItem("position") === null ||
      localStorage.getItem("email") === "" ||
      localStorage.getItem("number") === ""
    )
      return;

    if (localStorage.getItem("email").split("@")[1] !== redberryMailValidation)
      return;

    if (!localStorage.getItem("number").startsWith(georgianPhoneNumCode)) {
      return;
    }

    const employee = {
      name: localStorage.getItem("name"),
      lastName: localStorage.getItem("lastName"),
      direction: localStorage.getItem("direction"),
      position: localStorage.getItem("position"),
      email: localStorage.getItem("email"),
      number: localStorage.getItem("number"),
    };

    localStorage.setItem("employee", JSON.stringify(employee));

    setNextSection(true);
  };

  return (
    <div className="EmployeeInformation">
      <div className="EmployeeInformation-toggle-section">
        <span className={!nextSection ? "active-section" : ""}>
          თანამშრომლის ინფო
        </span>
        <span className={nextSection ? "active-section" : ""}>
          ლეპტოპის მახასიათებლები
        </span>
      </div>
      {!nextSection ? (
        <div className="EmployeeInformation-content">
          <form
            onSubmit={(e) => submitForm(e)}
            className="EmployeeInformation-content-inner"
          >
            <div className="EmployeeInformation-content-inner-firstName-lastName">
              <div className="EmployeeInformation-content-inner-firstName-lastName-firstName">
                <label htmlFor="firstName">სახელი</label>
                <input
                  value={localStorage.getItem("name") || name}
                  onChange={(e) => {
                    localStorage.setItem("name", e.target.value);
                    setName(e.target.value);
                  }}
                  id="firstName"
                  type="text"
                  placeholder="სახელი"
                />
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
              <div className="EmployeeInformation-content-inner-firstName-lastName-lastName">
                <label htmlFor="lastName">გვარი</label>
                <input
                  value={localStorage.getItem("lastName") || lastName}
                  onChange={(e) => {
                    localStorage.setItem("lastName", e.target.value);
                    setLastName(e.target.value);
                  }}
                  id="lastName"
                  type="text"
                  placeholder="გვარი"
                />
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
            </div>
            <div className="EmployeeInformation-content-inner-team">
              <select
                value={localStorage.getItem("direction") || direction}
                onChange={(e) => {
                  localStorage.setItem("direction", e.target.value);
                  setDirection(e.target.value);
                }}
              >
                <option value="თიმი" hidden>
                  თიმი
                </option>
                <option value="დეველოპმენტი">დეველოპმენტი</option>
                <option value="HR">HR</option>
                <option value="გაყიდვები">გაყიდვები</option>
                <option value="დიზაინი">დიზაინი</option>
                <option value="მარკეტინგი">მარკეტინგი</option>
              </select>
            </div>
            <div className="EmployeeInformation-content-inner-position">
              <select
                value={localStorage.getItem("position") || position}
                onChange={(e) => {
                  localStorage.setItem("position", e.target.value);
                  setPosition(e.target.value);
                }}
              >
                <option value="პოზიცია" hidden>
                  პოზიცია
                </option>
                <option value="ილუსტრატორი">ილუსტრატორი</option>
              </select>
            </div>
            <div className="EmployeeInformation-content-inner-mail">
              <label htmlFor="mail">მეილი</label>
              <input
                id="mail"
                value={localStorage.getItem("email") || email}
                onChange={(e) => {
                  localStorage.setItem("email", e.target.value);
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="yourmail@redberry.ge"
                required
              />
              <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            <div className="EmployeeInformation-content-inner-phone-number">
              <label htmlFor="number">ტელეფონის ნომერი</label>
              <input
                value={localStorage.getItem("number") || number}
                onChange={(e) => {
                  localStorage.setItem("number", e.target.value);
                  setNumber(e.target.value);
                }}
                id="number"
                type="number"
                placeholder="+995 598 00 07 01"
              />
              <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
            </div>
            <div className="EmployeeInformation-content-inner-button">
              <button type="submit">შემდეგი</button>
            </div>
          </form>
        </div>
      ) : (
        <LaptopDatails setNextSection={setNextSection} />
      )}
      <img
        onClick={() => goBack()}
        className="EmployeeInformation-go-back"
        title="უკან დაბრუნება"
        src={GoBack}
      />
    </div>
  );
}
