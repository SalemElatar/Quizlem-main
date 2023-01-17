import { Routes, Route } from "react-router-dom";

import Public from "./pages/public";
import Dashboard from "./pages/dashboard/index";
import SignUp from "./pages/sign-up/SignUp";
import Admin from "./pages/admin";
// import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Public />} />
        <Route path="admin" element={<Admin />} />
        <Route path="sign" element={<SignUp />} />

        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="dashboard/:username/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
