import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Cards from "./components/Cards";
import AddNew from "./components/AddNew";
import GetCardNo from "./components/GetCardNo";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<GetCardNo />} />
                    <Route path="/card/all" element={<Cards />} />
                    <Route path="/card/new" element={<AddNew />} />
                    <Route path="/card/:cardNo" element={<Card />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
