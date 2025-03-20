import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home1 from "./components/Home1";
import Settings from "./components/Settings";
import Savings from "./components/Savings";
import Donation from "./components/Donation";
import Profile from "./components/Profile";
import { Home, HandymanRounded, SavingsRounded, VolunteerActivismRounded, Person2Rounded } from "@mui/icons-material";

const AssesmentApp = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("/savings");

  const handleNavigate = (path) => {
    setActive(path);
    navigate(path);
  };

  const buttonClasses = (path) =>
    `p-2 flex items-center justify-center transition-all duration-300 cursor-pointer lg:w-full 
     ${active === path ? "bg-red-500 text-white rounded-full lg:scale-110  md:rounded-md" : "bg-gray-100 rounded-md hover:rounded-full md:hover:rounded-md hover:bg-red-500 hover:text-white"} 
     hover:[&>*]:text-white sm:hover:scale-110 sm:hover:translate-y-0 hover:scale-150 hover:-translate-y-3`;
  

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar for Desktop */}
      <div
        className={`hidden md:flex flex-col md:gap-8 items-center p-4 bg-white shadow-lg transition-all duration-300 w-40"`}
      
      >
        {[{ path: "/home", icon: <Home /> },
          { path: "/settings", icon: <HandymanRounded /> },
          { path: "/savings", icon: <SavingsRounded /> },
          { path: "/donation", icon: <VolunteerActivismRounded /> },
          { path: "/profile", icon: <Person2Rounded /> }
        ].map(({ path, icon }) => (
          <button key={path} onClick={() => handleNavigate(path)} className={buttonClasses(path)}>
            {icon}
             <span className="ml-2 text-sm">{path.replace("/", "").toUpperCase()}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center ">
        <Routes>
          <Route path="/home" element={<Home1 />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 border-2 border-gray-200 w-full md:hidden flex justify-around bg-white p-2 shadow-lg">
        {[{ path: "/home", icon: <Home /> },
          { path: "/settings", icon: <HandymanRounded /> },
          { path: "/savings", icon: <SavingsRounded /> },
          { path: "/donation", icon: <VolunteerActivismRounded /> },
          { path: "/profile", icon: <Person2Rounded /> }
        ].map(({ path, icon }) => (
          <button key={path} onClick={() => handleNavigate(path)} className={buttonClasses(path)}>
            {icon}
          </button>
        ))}
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