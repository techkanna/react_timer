import React from 'react';
import './App.css';
import Timer from './components/Timer';
function App() {
  return (
    <div className="App">
      <header>
        <div className="content">
          <div className="grid">
	          <div className="item1">
	            <i className="fas fa-hourglass-half"></i>
	          </div>
	          <div className="item2">
	          	<p>React Timer</p>
	          </div>
          </div>
        </div>
      </header>

      <Timer />
    </div>
  );
}

export default App;
