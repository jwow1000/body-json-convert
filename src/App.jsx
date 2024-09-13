import { useState } from 'react';
import './App.css'

function App() {
  

  function escapeString(str) {
    return str
      .replace(/\\/g, '\\\\')  // Escape backslashes
      .replace(/"/g, '\\"')     // Escape double quotes
      .replace(/\n/g, '\\n')    // Escape new lines
      .replace(/\r/g, '\\r')    // Escape carriage returns
      .replace(/\t/g, '\\t')    // Escape tabs
      .replace(/\f/g, '\\f')    // Escape form feeds
      .replace(/\b/g, '\\b');   // Escape backspaces
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
