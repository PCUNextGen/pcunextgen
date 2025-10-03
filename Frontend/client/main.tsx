
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EventRegister from "./components/sections/EventRegister";

import RegisterNowPage from "./pages/RegisterNow";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to NextGen Innovators Club</h1>
      <Link to="/register-now">
        <button className="px-6 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition">Register Now</button>
      </Link>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-now" element={<RegisterNowPage />} />
  <Route path="/register-now" element={<RegisterNowPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
