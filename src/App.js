import React from 'react';
import FigmaDesign from './components/FigmaDesign';
import LoginPage from './pages/LoginPage';
import { Route,Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import About from './pages/About';
import Features from './pages/Features';
import ChooseUs from './pages/ChooseUs';
function App() {
  return (
    <div className="App">
      
      <Routes> 
        <Route path = '/' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path = '/pussy' element={<FigmaDesign/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/features' element={<Features/>}/>
        <Route path = '/chooseus' element={<ChooseUs/>}/>
      </Routes>
    </div>
  );
}

export default App;





