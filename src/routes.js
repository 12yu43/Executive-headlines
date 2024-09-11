import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/auth/Login";
// import Signup from "./Pages/auth/Signup";

const Signup = React.lazy(() => import("./Pages/auth/Signup"));
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <React.Fragment> */}
        <Route path="/" element={<Login />}>
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
