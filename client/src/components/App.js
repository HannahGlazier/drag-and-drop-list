import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Internal imports
import RoomContainer from "./RoomContainer"

// dnd
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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
      <RoomContainer />
    </div>
  );
}

export default App;
