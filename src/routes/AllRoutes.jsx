import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AgoraMeet, Schedules } from "../pages"

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                exact
                path='/meeting/:channelName'
                element={<AgoraMeet inCall={true}/>}
            />
            <Route
                exact
                path='/schedule'
                element={<Schedules/>}
            />
        </Routes>
    )
}

export default AllRoutes