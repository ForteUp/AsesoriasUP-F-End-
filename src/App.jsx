import { useState } from "react";
// import './App.scss';

import AgendarCita from "./page/AgendarCita";
import LogIn from "./page/LogIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateAsesorRoute from "./utils/PrivateAsesorRoute.jsx";
import { AuthProvider } from "./Context/AuthContext";
import VerCitas from "./page/VerCitas.jsx";
import InfoAsesoria from "./page/InfoAsesoria";
import Old_AgendarCita from "./old_page/AgendarCita";
import Old_VerCitas from "./old_page/VerCitas.jsx";
import Old_InfoAsesoria from "./old_components/AgendarCitaPage/InfoAsesoria/InfoAsesoria";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/agendar" element={<AgendarCita />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/citas" element={<VerCitas />} />
          <Route path="/registrar" element={<InfoAsesoria />} />
          <Route path="/oldagendar" element={<Old_AgendarCita />} />
          <Route path="/oldcitas" element={<Old_VerCitas />} />
          <Route path="/oldregistrar" element={<Old_InfoAsesoria />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
