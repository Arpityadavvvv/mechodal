import { useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";


const Login = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!name || !mobile) {
      setMessage("All fields are required!");
      return;
    }

    try {
      console.log("data is coming ")
      const response = await axios.post("http://localhost:5000/login", {
        name,
        mobile,
      });

      setMessage(response.data.message);
      // Redirect to Dashboard after successful login
      navigate("/dashboard", { state: { user: response.data.user } });
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Welcome Back,</h2>
        <p className="text-sm text-gray-500 mb-4">Login with your details below.</p>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none"
          />

          <input
            type="text"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-[#981b43] text-white p-3 rounded-lg font-bold hover:bg-[#7d1436] transition"
          >
            Login
          </button>

          {message && <p className="mt-2 text-center text-red-600">{message}</p>}
        </div>

        <p className="text-center mt-4 text-sm text-gray-500">
          Don't have an account?{" "}
          <span className="text-[#981b43] font-bold cursor-pointer" onClick={() => navigate("/")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
