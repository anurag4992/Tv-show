import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Summary from "./components/Summary";

const routs = <BrowserRouter>
    <div>
        <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/Summary" element={<Summary />} />
        </Routes>
    </div>
</BrowserRouter>;

ReactDOM.render(routs, document.getElementById("root"));