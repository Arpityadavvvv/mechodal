import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";




function App() {
  return (
    
    <BrowserRouter>
    <div>
    <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />  
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

    </div>
      
    </BrowserRouter>

    
  
  );
}

export default App;




