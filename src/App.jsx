import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const Home = () => <div className="text-center text-xl">🏠 Home Page</div>;
const About = () => <div className="text-center text-xl">ℹ️ About Page</div>;
const Contact = () => <div className="text-center text-xl">📞 Contact Page</div>;

const MobileApp = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 min-w-full">
      <div className="w-[350px] h-[600px] bg-white rounded-2xl shadow-lg flex flex-col p-6">
        {/* Page Content */}
        <div className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between bg-white mt-4">
          <button onClick={() => navigate("/")} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
            Home
          </button>
          <button onClick={() => navigate("/about")} className="px-4 py-2 bg-green-500 text-white rounded-lg">
            About
          </button>
          <button onClick={() => navigate("/contact")} className="px-4 py-2 bg-red-500 text-white rounded-lg">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <MobileApp />
    </Router>
  );
}
