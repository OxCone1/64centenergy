import './App.css';
import { useEffect, useState } from 'react';
import PrepareMenu from './PrepareMenu';
import axios from 'axios'

function App() {
  const [recepie, setRecepie] = useState([]);
  
  //get return value from prepareMenu.js and set it to recepie
  
  return (
    <>
      <PrepareMenu />
    </>
  )
}

export default App;
