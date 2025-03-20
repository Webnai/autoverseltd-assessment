import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 min-w-full">
      <div className="w-[350px] h-[600px] bg-white rounded-2xl shadow-lg flex flex-col p-6">
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
        <div className="flex justify-between bg-white mt-4 ">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-100 p-2 rounded-lg hover:rounded-full flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-red-500 hover:scale-150 cursor-pointer"
          >
            <House fontSize="small" className=" text-gray-700 hover:text-white transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/settings")}
            className="bg-gray-100 p-2 rounded-lg hover:rounded-full flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-red-500 hover:scale-150 cursor-pointer"
          >
            <HandymanRounded fontSize="small" className=" text-gray-700 hover:text-white transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/savings")}
            className="bg-gray-100 p-2 rounded-lg hover:rounded-full flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-red-500 hover:scale-150 cursor-pointer"
          >
            <SavingsRounded fontSize="small" className=" text-gray-700 hover:text-white transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/donation")}
            className="bg-gray-100 p-2 rounded-lg hover:rounded-full flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-red-500 hover:scale-150 cursor-pointer"
          >
            <VolunteerActivismRounded fontSize="small" className=" text-gray-700 hover:text-white transition-all duration-300" />
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="bg-gray-100 p-2 rounded-lg hover:rounded-full flex items-center justify-center transition-all duration-300 hover:text-white hover:bg-red-500 hover:scale-150 cursor-pointer"
          >
            <Person2Rounded fontSize="small" className=" text-gray-700 hover:text-white transition-all duration-300" />
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
