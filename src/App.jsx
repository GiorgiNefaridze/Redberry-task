import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import EmployeeInformation from "./components/EmployeeInformation/EmployeeInformation";
import ListOfAddedLaptops from "./components/ListOfAddedLaptops/ListOfAddedLaptops";
import EachEmployeeWholeSection from "./components/EachEmployeeWholeSection/EachEmployeeWholeSection";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-information" element={<EmployeeInformation />} />
        <Route path="/laptop-list" element={<ListOfAddedLaptops />} />
        <Route path="/laptop-info" element={<EachEmployeeWholeSection />} />
      </Routes>
    </Router>
  );
};

export default App;
