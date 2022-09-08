import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import PhotosPage from "../pages/PhotosPage/PhotosPage";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/photos" exact element={<PhotosPage />}></Route>
      {/* <Route path="/login" element={<Navigate to="/" />}></Route>
      <Route path="/register" element={<Navigate to="/" />}></Route> */}
    </Routes>
  );
}

export default OtherRoutes;
