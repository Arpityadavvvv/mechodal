import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    if (!name || !mobile || !gender) {
      setMessage("All fields are required!");
      return;
    }

    try {
      const response = await axios.post("https://mechodal.onrender.com/signup", {
        name,
        mobile,
        gender,
      }, { withCredentials: true })
      setMessage(response.data.message);
      setTimeout(() => navigate("/login"), 1000);
    } 
   
    catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Create an account,</h2>
        <p className="text-sm text-gray-500 mb-4">
          Please type full information below and we can create your account.
        </p>

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

          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            placeholder="Enter Invite Code (Optional)"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none"
          />

          <button
            onClick={handleSignup}
            className="w-full bg-[#981b43] text-white p-3 rounded-lg font-bold hover:bg-[#7d1436] transition"
          >
            Next
          </button>

          {message && <p className="mt-2 text-center text-red-600">{message}</p>}
        </div>

        <p className="text-center mt-4 text-sm text-gray-500">
          Already have an account?{" "}
          <span className="text-[#981b43] font-bold cursor-pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

