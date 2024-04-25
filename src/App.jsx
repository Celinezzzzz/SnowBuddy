import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
<BrowserRouter>
      <Header/>
      <Routes>
        {/* reroute to resort list?? */}
        <Route path='/'></Route>

        {/* Resort list */}
        <Route path='/resorts'></Route>

        {/* Resort details */}
        <Route path='/resorts/:resortId'></Route>

      </Routes>
    {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
