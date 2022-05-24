import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [rooms, setRooms] = useState([])

  // TEST FETCHES
  useEffect(() => {
    fetch('/rooms')
    .then(response => response.json())
    .then(rooms => setRooms(rooms))
  }, [])



  return (
    <div className="App">
      <header className="App-header">
          TESTING APP 
      </header>
    </div>
  );
}

export default App;
