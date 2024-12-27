import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState("olive"); // Current color
  const [favorites, setFavorites] = useState([]); // Saved favorite colors

  // Function to generate a random color
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div style={{ 
      background: color, 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'background 0.5s ease' // Smooth transition for color change
    }}>
      {/* Spacer to push buttons to the bottom */}
      <div style={{ flex: 1 }} /> 

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        <button
          onClick={() => setColor("linear-gradient(to right, red, yellow)")}
          style={{
            padding: '10px 20px',
            background: 'linear-gradient(to right, red, yellow)',
            color: 'white',
            border: 'none',
            borderRadius: '50%'
          }}
        >
          Gradient
        </button>
        <button
          onClick={() => setColor(generateRandomColor())}
          style={{
            padding: '10px 20px',
            backgroundColor: 'purple',
            color: 'white',
            border: 'none',
            borderRadius: '50%'
          }}
        >
          Random Color
        </button>
        <button
          onClick={() => setFavorites([...favorites, color])}
          style={{
            padding: '10px 20px',
            backgroundColor: 'orange',
            color: 'white',
            border: 'none',
            borderRadius: '50%'
          }}
        >
          Save Color
        </button>
      </div>

      {/* Favorites Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        padding: '10px'
      }}>
        {favorites.map((fav, index) => (
          <div
            key={index}
            onClick={() => setColor(fav)} // Set background to selected favorite color
            style={{
              background: fav,
              width: '50px',
              height: '50px',
              borderRadius: '5px',
              cursor: 'pointer',
              border: '2px solid #fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
            }}
            title={`Click to apply ${fav}`}
          />
        ))}
      </div>

      {/* Display Current Color */}
      <div style={{ textAlign: 'center', color: 'white', marginBottom: '10px' }}>
        Current Color: {color}
      </div>
    </div>
  );
}

export default App;
