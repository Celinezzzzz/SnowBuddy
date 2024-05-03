import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import ResortsPage from './pages/ResortsPage/ResortsPage';

function App() {
  return (
<BrowserRouter>
      <Header/>
      <Routes>
        {/* reroute to resort list?? */}
        <Route path='/'></Route>

        {/* Resort list */}
        <Route path='/resorts'element={<ResortsPage />}></Route>

        {/* Resort details */}
        <Route path='/resorts/:resortId'></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
