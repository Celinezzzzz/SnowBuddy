import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import ResortsPage from './pages/ResortsPage/ResortsPage';
import ResortDetailsPage from './pages/ResortDetailsPage/ResortDetailsPage';
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
      !!localStorage.getItem("authToken")
  );

  return (
      <BrowserRouter>
          <Header isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
          <Routes>
              <Route path="/" element={<Navigate replace to="/resorts" />} />
              <Route path="/resorts" element={<ResortsPage />} />
              <Route path="/resorts/:itemId" element={<ResortDetailsPage />} />
              <Route path="/login" element={<Login setIsUserLoggedIn={setIsUserLoggedIn} />} />
              <Route path="/signup" element={<Signup setIsUserLoggedIn={setIsUserLoggedIn} />} />
              {isUserLoggedIn ? (
                  <Route path="/profile" element={<Profile setIsUserLoggedIn={setIsUserLoggedIn} />} />
              ) : (
                  <Route path="/profile" element={<Navigate replace to="/login" />} />
              )}
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
