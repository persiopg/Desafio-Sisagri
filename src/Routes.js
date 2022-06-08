import React from "react";
import {Switch, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

export default () => {
    return (
        <Switch>
            <Routes exact path="/">
                <Login />
            </Routes>
            <Routes exact path="/Home">
                <Home />
            </Routes>
        </Switch>
    );
}