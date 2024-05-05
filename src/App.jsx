import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import ResortsPage from './pages/ResortsPage/ResortsPage';
import ResortDetailsPage from './pages/ResortDetailsPage/ResortDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/resorts" />} />
        <Route path="/resorts" element={<ResortsPage />} />
        <Route path="/resorts/:itemId" element={<ResortDetailsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
