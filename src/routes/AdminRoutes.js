import { Routes, Route } from "react-router-dom";

import AdminPage from "../pages/Admin/AdminPage";
import AdminPhotos from "../components/AdminPhotos/AdminPhotos";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/admin" exact element={<AdminPage />}></Route>
      <Route path="/admin/photos" exact element={<AdminPhotos />}></Route>
      {/* <Route path="/admin/phrases" exact element={<AdminPhrases />}></Route> */}
      {/* <Route path="/admin/users" exact element={<AdminUsers />}></Route> */}
    </Routes>
  );
}

export default OtherRoutes;
