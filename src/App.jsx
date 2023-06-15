import { useState } from 'react';
import './App.scss';

import AgendarCita from './Rpage/AgendarCita';
import LogIn from './Rpage/LogIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateAsesorRoute from "./utils/PrivateAsesorRoute.jsx";
import {AuthProvider} from "./Context/AuthContext";
import VerCitas from "./Rpage/VerCitas.jsx";
import InfoAsesoria from './Rcomponents/AgendarCitaPage/InfoAsesoria/InfoAsesoria';


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                        <Route
                            path="/agendar"
                            element={
                                    <AgendarCita />
                             }
                        />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/citas" element={<VerCitas />} />
                        <Route path="/registrar" element={<InfoAsesoria/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
