import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import NotesListPage from "./pages/NotesListPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
