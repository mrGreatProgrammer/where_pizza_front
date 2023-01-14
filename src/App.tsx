import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import Login from "./pages/Auth/Register/Login/Login";
import Register from "./pages/Auth/Register/Register";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/auth/register" element={<Register />}></Route>
          <Route path="/auth/login" element={<Login />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
