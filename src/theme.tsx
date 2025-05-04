// themeSuggestion.tsx
import { useState } from 'react';



const ThemeSuggestion = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
  
    const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    return (
        <>

  
        <div className="theme-suggestion-container">
          <div className="theme-header">
            <h1>Välj ditt tema</h1>
            <button className="w-btn" onClick={toggleTheme}>
              {isDarkMode ? 'Byt till ljus läge' : 'Byt till mörkt läge'}
            </button>
          </div>
  
          <div className="theme-preview">
            <div className="w-card">
              <h2>Dashboard-actions</h2>
              <div className="dashboard-actions">
                <button className="w-btn">Ny budget</button>
                <button className="w-btn">Importera data</button>
                <button className="w-btn">Exportera rapport</button>
                <button className="w-btn">Rensa historik</button>
              </div>
            </div>
  
            <div className="w-card">
              <h2>Formulär</h2>
              <input type="text" className="w-input" placeholder="Titel..." />
              <textarea className="w-textarea" placeholder="Beskrivning..."></textarea>
            </div>
          </div>
        </div>
      </>
    );
  };
  
export default ThemeSuggestion;
