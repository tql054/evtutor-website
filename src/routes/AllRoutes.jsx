import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AgoraMeet } from "../pages"

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path='/meeting/:channelName'
                element={<AgoraMeet/>}
            />

        </Routes>
    )
}

export default AllRoutes