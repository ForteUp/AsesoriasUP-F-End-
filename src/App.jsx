import { useState } from 'react';
import './App.scss';

import AgendarCita from './page/AgendarCita';
import LogIn from './page/LogIn';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateAsesorRoute from "./utils/PrivateAsesorRoute.jsx";
import {AuthProvider} from "./Context/AuthContext";


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
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
