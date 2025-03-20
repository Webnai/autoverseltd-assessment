import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Savings from "./components/Savings";
import Donation from "./components/Donation";
import Profile from "./components/Profile";
import { House } from "@mui/icons-material";
import { HandymanRounded } from "@mui/icons-material";
import { SavingsRounded } from "@mui/icons-material";
import { VolunteerActivismRounded } from "@mui/icons-material";
import { Person2Rounded } from "@mui/icons-material";

const AssesmentApp = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/"); // Track active button

  const handleNavigate = (path) => {
    setActive(path);
    navigate(path);
  };

  const buttonClasses = (path) =>
    `p-2 flex items-center justify-center transition-all duration-300 cursor-pointer 
     ${active === path ? "bg-red-500 text-white scale-150 -translate-y-3 rounded-full" : "bg-gray-100 rounded-lg hover:rounded-full hover:bg-red-500 hover:text-white hover:scale-150 hover:-translate-y-3"} 
     hover:[&>*]:text-white`;

  const iconClasses = (path) =>
    `text-gray-700 transition-all duration-300 ${active === path ? "text-white" : ""}`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 min-w-full">
      <div className="w-[350px] h-[600px] bg-white rounded-3xl shadow-lg flex flex-col">
        {/* Page Content */}
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between bg-white mt-4 rounded-2xl px-6 py-2 w-[90%] mx-auto">
          <button onClick={() => handleNavigate("/")} className={buttonClasses("/")}>
            <House sx={{ fontSize: 16 }} className={iconClasses("/")} />
          </button>

          <button onClick={() => handleNavigate("/settings")} className={buttonClasses("/settings")}>
            <HandymanRounded sx={{ fontSize: 16 }} className={iconClasses("/settings")} />
          </button>

          <button onClick={() => handleNavigate("/savings")} className={buttonClasses("/savings")}>
            <SavingsRounded sx={{ fontSize: 16 }} className={iconClasses("/savings")} />
          </button>

          <button onClick={() => handleNavigate("/donation")} className={buttonClasses("/donation")}>
            <VolunteerActivismRounded sx={{ fontSize: 16 }} className={iconClasses("/donation")} />
          </button>

          <button onClick={() => handleNavigate("/profile")} className={buttonClasses("/profile")}>
            <Person2Rounded sx={{ fontSize: 16 }} className={iconClasses("/profile")} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AssesmentApp />
    </Router>
  );
}
