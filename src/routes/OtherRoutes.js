import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <Route path="/about" exact element={<AboutPage />}></Route> */}
      {/* <Route path="/login" element={<Navigate to="/" />}></Route>
      <Route path="/register" element={<Navigate to="/" />}></Route> */}
    </Routes>
  );
}

export default OtherRoutes;
