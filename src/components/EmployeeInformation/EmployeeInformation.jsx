import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GoBack from "../../images/go-back.png";

import "./EmployeeInformation.scss";

//validation
const redberryMailValidation = "redberry.ge";
const georgianPhoneNumCode = "995";

const georgianLetters = [
  "ა",
  "ბ",
  "გ",
  "დ",
  "ე",
  "ვ",
  "ზ",
  "თ",
  "ი",
  "კ",
  "ლ",
  "მ",
  "ნ",
  "ო",
  "პ",
  "ჟ",
  "რ",
  "ს",
  "ტ",
  "უ",
  "ფ",
  "ქ",
  "ღ",
  "ყ",
  "შ",
  "ჩ",
  "ც",
  "ძ",
  "წ",
  "ჭ",
  "ხ",
  "ჯ",
  "ჰ",
];

export default function EmployeeInformation() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [direction, setDirection] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      name.length < 2 ||
      lastName === "" ||
      lastName.length < 2 ||
      email === "" ||
      number === ""
    )
      return;

    for (let i = 0; i < georgianLetters.length; i++) {
      for (let j = 0; j < name.length; j++) {
        if (georgianLetters[i] === name[j]) {
          return true;
        }
      }
    }

    if (email.split("@")[1] !== redberryMailValidation) return;

    if (!number.startsWith(georgianPhoneNumCode)) {
      return;
    }
  };

  return (
    <div className="EmployeeInformation">
      <div className="EmployeeInformation-toggle-section">
        <span>თანამშრომლის ინფო</span>
        <span>ლეპტოპის მახასიათებლები</span>
      </div>
      <div className="EmployeeInformation-content">
        <form
          onSubmit={(e) => submitForm(e)}
          className="EmployeeInformation-content-inner"
        >
          <div className="EmployeeInformation-content-inner-firstName-lastName">
            <div className="EmployeeInformation-content-inner-firstName-lastName-firstName">
              <label htmlFor="firstName">სახელი</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="firstName"
                type="text"
                placeholder="სახელი"
              />
              <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
            </div>
            <div className="EmployeeInformation-content-inner-firstName-lastName-lastName">
              <label htmlFor="lastName">გვარი</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastName"
                type="text"
                placeholder="გვარი"
              />
              <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
            </div>
          </div>
          <div className="EmployeeInformation-content-inner-team">
            <select
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
            >
              <option value="თიმი">თიმი</option>
              <option value="დეველოპმენტი">დეველოპმენტი</option>
              <option value="HR">HR</option>
              <option value="გაყიდვები">გაყიდვები</option>
              <option value="დიზაინი">დიზაინი</option>
              <option value="მარკეტინგი">მარკეტინგი</option>
            </select>
          </div>
          <div className="EmployeeInformation-content-inner-position">
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="პოზიცია">პოზიცია</option>
            </select>
          </div>
          <div className="EmployeeInformation-content-inner-mail">
            <label htmlFor="mail">მეილი</label>
            <input
              id="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="yourmail@redberry.ge"
              required
            />
            <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </div>
          <div className="EmployeeInformation-content-inner-phone-number">
            <label htmlFor="number">ტელეფონის ნომერი</label>
            <input
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
      <img
        onClick={() => goBack()}
        className="EmployeeInformation-go-back"
        title="უკან დაბრუნება"
        src={GoBack}
      />
    </div>
  );
}
