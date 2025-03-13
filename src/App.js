import React from 'react';
import FigmaDesign from './components/FigmaDesign';
import LoginPage from './pages/LoginPage';
import { Route,Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import About from './pages/About';
import Features from './pages/Features';
import ChooseUs from './pages/ChooseUs';
import Mock_interview from './pages/Mock_interview';
import DifficultyLevel from './pages/DifficultyLevel';
import Allow from './pages/Allow';
import Interview_chatbox from './pages/Interview_chatbox';
import Form from './components/Form';
import Chatbox from './components/Chatbox';
function App() {
  return (
    <div className="App">
      
      <Routes> 
        <Route path = '/' element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage />} />
        <Route path = '/home' element={<FigmaDesign/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/features' element={<Features/>}/>
        <Route path = '/chooseus' element={<ChooseUs/>}/>
        <Route path = '/mockinterview' element={<Mock_interview/>}/>
        <Route path = '/difficulty' element={<DifficultyLevel/>}/>
        <Route path = '/allow' element={<Allow/>}/>
        <Route path = '/interviewchatbox' element={<Interview_chatbox/>}/>
        <Route path = '/form' element={<Form/>}/>
        <Route path = '/chatbox' element={<Chatbox/>}/>
      </Routes>
    </div>
  );
}

export default App;





