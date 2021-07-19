import React, { Component } from 'react';
import Header from './Header';
import Tasks from './Tasks';


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container border ">
        <Header />
        <Tasks />

      </div >
    );
  }

}

export default App;