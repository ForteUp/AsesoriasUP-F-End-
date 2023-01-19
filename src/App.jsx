import { useState } from 'react';
import './App.scss';

import AgendarCita from './page/AgendarCita';
import LogIn from './page/LogIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateAsesorRoute from "./utils/PrivateAsesorRoute.jsx";
import {AuthProvider} from "./Context/AuthContext";
import VerCitas from "./page/VerCitas.jsx";
import InfoAsesoria from './components/AgendarCitaPage/InfoAsesoria/InfoAsesoria';


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                        <Route
                            path="/agendar"
                            element={
                                <PrivateAsesorRoute>
                                    <AgendarCita />
                                </PrivateAsesorRoute>
                             }
                        />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="/citas" element={<VerCitas />} />
                        <Route path="/testinfoasecompo" element={<InfoAsesoria/>}/>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
