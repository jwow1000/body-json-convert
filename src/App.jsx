import { useState } from 'react';
import './App.css'

function App() {
  function escapeString(text) {
  return text
    .replace(/"/g, '\\"')    // escapes double quotes 
    .replace(/\\/g, '\\\\')  // Escapes backslashes
    
  
  }
  
  const [text, setText] = useState("");
  const [newText, setNewText] = useState("");

  const handleChange = (event) => {
    setText( event.target.value );
  }
  const handleTrig = () => {
    const convert = escapeString(text);
    setNewText( convert );
  }
  return (
    <div id="main-form">
      <input 
        type="text" 
        id="text-input" 
        value={ text }
        onChange={handleChange}
      />
      <button 
        id="trig-convert"
        onClick={handleTrig}
      >
        CONVERT TEXT
      </button>
      <p>
        {newText}
      </p>

    </div>
  )
} 
export default App
