import "./EmployeeInformation.scss";

export default function EmployeeInformation() {
  return (
    <div className="EmployeeInformation">
      <div className="EmployeeInformation-toggle-section">
        <span>თანამშრომლის ინფო</span>
        <span>ლეპტოპის მახასიათებლები</span>
      </div>
      <div className="EmployeeInformation-content">
        <div className="EmployeeInformation-content-inner">
          <div className="EmployeeInformation-content-inner-firstName-lastName">
            <div className="EmployeeInformation-content-inner-firstName-lastName-firstName">
              <label htmlFor="firstName">სახელი</label>
              <input id="firstName" type="text" placeholder="სახელი" />
              <span>ვალიდაცია</span>
            </div>
            <div className="EmployeeInformation-content-inner-firstName-lastName-lastName">
              <label htmlFor="lastName">გვარი</label>
              <input id="lastName" type="text" placeholder="გვარი" />
              <span>ვალიდაცია</span>
            </div>
          </div>
          <div className="EmployeeInformation-content-inner-team">
            <select>
              <option value="თიმი">თიმი</option>
              <option value="დეველოპმენტი">დეველოპმენტი</option>
              <option value="HR">HR</option>
              <option value="გაყიდვები">გაყიდვები</option>
              <option value="დიზაინი">დიზაინი</option>
              <option value="მარკეტინგი">მარკეტინგი</option>
            </select>
          </div>
          <div className="EmployeeInformation-content-inner-position">
            <select>
              <option value="პოზიცია">პოზიცია</option>
            </select>
          </div>
          <div className="EmployeeInformation-content-inner-mail">
            <label htmlFor="mail">მეილი</label>
            <input
              id="mail"
              type="email"
              placeholder="yourmail@redberry.ge"
              required
            />
            <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>
          </div>
          <div className="EmployeeInformation-content-inner-phone-number">
            <label htmlFor="number">ტელეფონის ნომერი</label>
            <input id="number" type="text" placeholder="+995 598 00 07 01" />
            <span>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</span>
          </div>
          <div className="EmployeeInformation-content-inner-button">
            <button type="submit">შემდეგი</button>
          </div>
        </div>
      </div>
    </div>
  );
}
