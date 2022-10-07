import React from "react";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex w-screen h-screen">
      <BrowserRouter>
        <div className="app align-middle">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
