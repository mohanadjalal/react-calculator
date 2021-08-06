import React, { Component } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import tasks from "./taskList";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container border ">
        <Header />
        <Tasks tx={tasks} />

      </div >
    );
  }

}

export default App;