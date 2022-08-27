import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import EmployeeInformation from "./components/EmployeeInformation/EmployeeInformation";

import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-information" element={<EmployeeInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
