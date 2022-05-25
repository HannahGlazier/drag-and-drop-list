// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

// // Internal imports
// import RoomContainer from "./RoomContainer"
// import TestData from './TestData'

// // dnd
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// function App() {
//   const [rooms, setRooms] = useState([])
//   state = TestData

//   // TEST FETCHES
//   useEffect(() => {
//     fetch('/rooms')
//     .then(response => response.json())
//     .then(rooms => setRooms(rooms))
//   }, [])


//   return (
//     <div className="App">
//       <header className="App-header">
//           TESTING APP 
//       </header>
//       <RoomContainer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';
// import '@atlaskit/css-reset';
import TestData from './TestData';
import Column from './column';

class App extends React.Component {
  state = TestData;

  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

      return <Column key={column.id} column={column} tasks={tasks} />;
    });
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App