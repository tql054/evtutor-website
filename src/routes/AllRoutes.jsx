import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AgoraMeet from "../pages/AgoraMeet";

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path='/schedules'
                element={<AgoraMeet/>}
            />
        </Routes>
    )
}

export default AllRoutes