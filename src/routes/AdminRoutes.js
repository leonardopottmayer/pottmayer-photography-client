import { Routes, Route } from "react-router-dom";

import AdminPage from "../pages/Admin/AdminPage";
import AdminPosts from "../components/Admin/AdminPosts/AdminPosts";

function OtherRoutes() {
  return (
    <Routes>
      <Route path="/admin" exact element={<AdminPage />}></Route>
      <Route path="/admin/posts" exact element={<AdminPosts />}></Route>
      {/* <Route path="/admin/phrases" exact element={<AdminPhrases />}></Route> */}
      {/* <Route path="/admin/users" exact element={<AdminUsers />}></Route> */}
    </Routes>
  );
}

export default OtherRoutes;
