import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const user = location.state?.user || { name: "Guest" }; 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">hello welcome </h2>
        <p className="text-lg text-gray-600"> {user.name}</p>
      </div>
    </div>
  );
};

export default Dashboard;
