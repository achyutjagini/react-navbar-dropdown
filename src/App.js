import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </>

  );
}

export default App;
