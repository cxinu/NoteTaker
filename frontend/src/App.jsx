import React from "react";
// import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Header /> */}
      <Body/>
      <Footer/>
        <Routes>
          <Route path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
