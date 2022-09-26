import {React} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/Navbar';
import CryptoHome from './pages/CryptoHome';
import { QuerClient, QueryClientProvider} from '@tanstack/react-query'



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<CryptoHome />}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
