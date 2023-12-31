import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import MyArea from "./pages/MyArea";
import AdminArea from "./pages/AdminArea";
import Shows from "./pages/Shows";
import ShowDetails from "./pages/ShowDetails";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/registration" element={<Registration />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/myArea/:username" element={<MyArea />} />
            <Route path="/area-admin" element={<AdminArea />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="/show-details/:title/:id" element={<ShowDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// Un ringraziamento speciale a tutto il Team di EPICODE, che ha reso possibile quest'avventura <3
