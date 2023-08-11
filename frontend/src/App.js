import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Utils/Navbar.js'
import { About } from './About.js';
import './CSS/App.css';
import { HatchCheck } from './date-check/HatchCheck.js';
import { GenCheck } from './generations-check/GenCheck.js';
import { AgeCheck } from './date-check/AgeCheck.js';

function App() {
  return (
    <div className="App">
      <div><Toaster /></div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={
            <HatchCheck />}>
          </Route>
          <Route path="/hatchcheck" element={
            <HatchCheck />}>
          </Route>
          <Route path="/agecheck" element={
            <AgeCheck />}>
          </Route>
          <Route path="/gencheck" element={
            <GenCheck />}>
          </Route>
          <Route path="/about" element={
            <About />}>
          </Route>
        </Routes>
      <br />
      <br />
      <div className='App-footer'>
        <p>All dragon breeds, genes and colours  property of <a className='App-link' href="https://www.flightrising.com">Flight Rising</a> © Stormlight Workshop LLC<br /></p>
      </div>
    </div>
  );
}

export default App;
