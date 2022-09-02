import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { RedberryApi } from "../../api/RedberryApi";

import LaptopDatails from "../LaptopDatails/LaptopDatails";

import GoBack from "../../images/go-back.png";
import GoBackMobile from "../../images/go-back-mobile.png";

import "./EmployeeInformation.scss";

//validation
const redberryMailValidation = "redberry.ge";
const georgianPhoneNumCode = "+995";

const EmployeeInformation = () => {
  const [teams, setTeams] = useState([]);
  const [allPositions, setAllPositions] = useState([]);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [direction, setDirection] = useState({});
  const [position, setPosition] = useState({});
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nextSection, setNextSection] = useState(false);

  const inputNameRef = useRef();
  const inputLastNameRef = useRef();
  const selectTeamRef = useRef();
  const selectPositionRef = useRef();
  const inputEmailRef = useRef();
  const inputPhoneNumberRef = useRef();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const { data } = await RedberryApi.get("/teams");

    setTeams(data.data);
  };

  useEffect(() => {
    if (teams.length >= 1) {
      const getPositions = async () => {
        const { data } = await RedberryApi.get("/positions");
        
        if(localStorage.getItem("direction")){
          const changedPosition = data.data.filter(eachPosition => eachPosition.team_id === JSON.parse(localStorage.getItem("direction")).id)
          setAllPositions(changedPosition);
        }else{
          setAllPositions(data.data);
        }

      };

      getPositions();
    }
  }, [teams, direction]);

  const submitForm = (e) => {
    e.preventDefault();

    if (
      !localStorage.getItem("name") ||
      localStorage.getItem("name")?.length < 2
    ) {
      inputNameRef.current.children[0].style.color = "red";
      inputNameRef.current.children[1].style.border = "1.8px solid red";
      inputNameRef.current.children[2].style.color = "red";
      return;
    } else {
      inputNameRef.current.children[0].style.color = "black";
      inputNameRef.current.children[1].style.border = "1.8px solid #8ac0e2";
      inputNameRef.current.children[2].style.color = "black";
    }

    if (
      !localStorage.getItem("lastName") ||
      localStorage.getItem("lastName")?.length < 2
    ) {
      inputLastNameRef.current.children[0].style.color = "red";
      inputLastNameRef.current.children[1].style.border = "1.8px solid red";
      inputLastNameRef.current.children[2].style.color = "red";
      return;
    } else {
      inputLastNameRef.current.children[0].style.color = "black";
      inputLastNameRef.current.children[1].style.border = "1.8px solid #8ac0e2";
      inputLastNameRef.current.children[2].style.color = "black";
    }

    if (
      !localStorage.getItem("email") ||
      localStorage.getItem("email").split("@")[1] !== redberryMailValidation
    ) {
      inputEmailRef.current.children[0].style.color = "red";
      inputEmailRef.current.children[1].style.border = "1.8px solid red";
      inputEmailRef.current.children[2].style.color = "red";
      return;
    } else {
      inputEmailRef.current.children[0].style.color = "black";
      inputEmailRef.current.children[1].style.border = "1.8px solid #8ac0e2";
      inputEmailRef.current.children[2].style.color = "black";
    }

    if (
      !localStorage.getItem("number") ||
      localStorage.getItem("number").length > 13 ||
      !localStorage.getItem("number").startsWith(georgianPhoneNumCode)
    ) {
      inputPhoneNumberRef.current.children[0].style.color = "red";
      inputPhoneNumberRef.current.children[1].style.border = "1.8px solid red";
      inputPhoneNumberRef.current.children[2].style.color = "red";
      return;
    } else {
      inputPhoneNumberRef.current.children[0].style.color = "black";
      inputPhoneNumberRef.current.children[1].style.border =
        "1.8px solid #8ac0e2";
      inputPhoneNumberRef.current.children[2].style.color = "black";
    }

    if (!localStorage.getItem("direction") || !localStorage.getItem("position"))
      return;

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
      <div className="EmployeeInformation-toggle-section-mobile">
        <h3>
          {!nextSection ? "თანამშრომლის ინფო" : "ლეპტოპის მახასიათებლები"}
        </h3>
        <span>{!nextSection ? "1/2" : "2/2"}</span>
      </div>
      {!nextSection ? (
        <div className="EmployeeInformation-content">
          <form
            onSubmit={(e) => submitForm(e)}
            className="EmployeeInformation-content-inner"
          >
            <div className="EmployeeInformation-content-inner-firstName-lastName">
              <div
                ref={inputNameRef}
                className="EmployeeInformation-content-inner-firstName-lastName-firstName"
              >
                <label htmlFor="firstName">სახელი</label>
                <input
                  value={localStorage.getItem("name") || name}
                  onChange={(e) => {
                    let inp = e.target.value;
                    if (!/^[ა-ჰ+]*$/.test(inp)) {
                      return;
                    }

                    localStorage.setItem("name", inp);
                    setName(e.target.value);
                  }}
                  id="firstName"
                  type="text"
                  placeholder="სახელი"
                />
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
              <div
                ref={inputLastNameRef}
                className="EmployeeInformation-content-inner-firstName-lastName-lastName"
              >
                <label htmlFor="lastName">გვარი</label>
                <input
                  value={localStorage.getItem("lastName") || lastName}
                  onChange={(e) => {
                    let inp = e.target.value;
                    if (!/^[ა-ჰ+]*$/.test(inp)) {
                      return;
                    }

                    localStorage.setItem("lastName", inp);
                    setLastName(e.target.value);
                  }}
                  id="lastName"
                  type="text"
                  placeholder="გვარი"
                />
                <span>მინიმუმ 2 სიმბოლო, ქართული ასოები</span>
              </div>
            </div>
            <div
              ref={selectTeamRef}
              className="EmployeeInformation-content-inner-team"
            >
              <select
                value={
                  JSON.parse(localStorage.getItem("direction"))?.value ||
                  direction.value
                }
                onChange={(e) => {
                  let team = {
                    value: e.target.value,
                    id: e.target.options.selectedIndex,
                  };
                  localStorage.setItem("direction", JSON.stringify(team));
                  setDirection(team);
                }}
              >
                <option value="თიმი" hidden>
                  თიმი
                </option>
                {teams?.map((team) => (
                  <option key={team.id}>{team.name}</option>
                ))}
              </select>
            </div>
            <div
              ref={selectPositionRef}
              className="EmployeeInformation-content-inner-position"
            >
              <select
                value={
                  JSON.parse(localStorage.getItem("position"))?.value ||
                  position.value
                }
                onChange={(e) => {
                  let position = {
                    value: e.target.value,
                    id: e.target.options.selectedIndex,
                  };
                  localStorage.setItem("position", JSON.stringify(position));
                  setPosition(position);
                }}
              >
                <option value="პოზიცია" hidden>
                  პოზიცია
                </option>
                {allPositions?.map((position) => (
                  <option key={position.id}>{position.name}</option>
                ))}
              </select>
            </div>
            <div
              ref={inputEmailRef}
              className="EmployeeInformation-content-inner-mail"
            >
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
              />
              <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
            </div>
            <div
              ref={inputPhoneNumberRef}
              className="EmployeeInformation-content-inner-phone-number"
            >
              <label htmlFor="number">ტელეფონის ნომერი</label>
              <input
                value={localStorage.getItem("number") || number}
                onChange={(e) => {
                  if (!/^[0-9++ ]*$/.test(e.target.value)) {
                    return;
                  }
                  localStorage.setItem("number", e.target.value);
                  setNumber(e.target.value);
                }}
                id="number"
                type="text"
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
        alt="go-back"
      />
      <img
        onClick={() => goBack()}
        className="EmployeeInformation-go-back-mobile"
        title="უკან დაბრუნება"
        src={GoBackMobile}
        alt="go-back"
      />
    </div>
  );
};

export default EmployeeInformation;
