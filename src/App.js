import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
// import dark from "./images/react-dark.png"
function App() {
  const [darkMode,setDarkMode]=useState(false);

  function toggleDarkMode(){
    setDarkMode(prevMode=>!prevMode);
  }

  return (
    // <img src={dark} alt ="logo dark"/>
    <div className='container'>

      <Navbar  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
      
    </div>
  );
}

export default App;
