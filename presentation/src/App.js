import React from 'react';
import './App.css';
import Events from './components/Events';
import Calendar from './components/Calendar';


function App() {
       
  
  return (
  <>
    <div className="Top">
        <h1>Event Scheduler Calendar</h1>
    </div>
    <div>
        <Calendar />
    </div>

    <div className="App">
        <Events />

    </div>
  </>
  );
}

export default App;
