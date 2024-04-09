import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login/Login";
// import Navbar from "./Component/Navbar/Navbar";
import Register from "./Component/Register/Register";
import OTPVerification from "./Component/Register/OTPVerification";
import { Home } from "./Pages/Home";
import { Courses } from "./Pages/Courses";
import { Practice } from "./Pages/Practice";
import Software from "./Pages/Software";
import Hardware from "./Pages/Hardware";
import AddProjectForm from "./Component/softwareprojectcard/Addproject";
import CoursesSlider from "./Component/CourseCardItem/CourseCarditem";
import AdminLogin from "./Component/AdminLogin/AdminLogin";
import RecommendationForm from "./Component/Recommendation Form/RecommendationForm";
// import Footer from "./Component/Footer/footer";
import { Event } from "./Component/Event/Event";
import AdminPanel from "./Component/AdminPanel/AdminPanel";
import AdminRegister from "./Component/Admin Register/AdminRegister";
import AddHProjectForm from "./Component/Hardwareprojectcard/AddHproject";
import AddProblem from "./Component/AdminPanel/AddProblem";
import ShowProblem from "./Component/ShowProblem/ShowProblem";
import { AddEvent } from "./Component/AdminPanel/AddEvent";
import AssignProject from "./Component/AdminPanel/AssignProject";
// import AbstractBackground from "./Component/AbstractBg/AbstractBg";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Software" element={<Software />} />
        <Route path="/Hardware" element={<Hardware />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/otpverification" element={<OTPVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/addproject" element={<AddProjectForm />}></Route>
        <Route path="/addhardwareproject" element={<AddHProjectForm />}></Route>
        <Route path="/courseslide" element={<CoursesSlider />} />
        <Route path="/Adminlogin" element={<AdminLogin />}></Route>
        <Route path="/AdminRegister" element={<AdminRegister />}></Route>
        <Route path="/adminpanel" element={<AdminPanel />}></Route>
        <Route path="/addproblem" element={<AddProblem />}></Route>
        <Route path="/addevent" element={<AddEvent />}></Route>
        <Route path="/assignproject" element={<AssignProject />}></Route>
        <Route path="/showproblem" element={<ShowProblem />}></Route>
        <Route
          path="RecommendationForm"
          element={<RecommendationForm />}
        ></Route>
        <Route Component={<Event />}></Route>
        {/* <Route Component={<AbstractBackground />}></Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
