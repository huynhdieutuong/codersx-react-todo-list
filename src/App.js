import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const todos = ['Go to market', 'Buy food', 'Make dinner'];

    return (
      <div className='App'>
        <ul>
          {todos.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
