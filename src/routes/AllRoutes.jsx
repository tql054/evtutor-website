import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AgoraMeet, Home} from "../pages"

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
                path='/'
                element={<Home/>}
            />
        </Routes>
    )
}

export default AllRoutes