// import "./App.css";
import React from "react";
import Header from "./components/Header.js";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
