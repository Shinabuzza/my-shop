import React from 'react';
import logo from './logo.jpg';
import ru from './ru.jpg';
import us from './us.jpg';
import './store';

import './App.css';


function App() {
  return (
    <div className="Containter">

      <header className="App-header">
        <p>
          <img src={logo} className="App-logo" alt="logo" />
        </p>
        <div className="Langs">
          <img src={ru} className="Ru-lang" alt="ru" />
          <img src={us} className="Us-lang" alt="us" />
        </div>
      </header>

     
    </div>
  );
}

export default App;
