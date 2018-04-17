import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './views/LoginView';
// Uses material-ui to provide mateirla design components

const styles = {
  centerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: '#515151'
  }
};

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.centerBox}>
        <LoginView />
      </div>
    );
  }
}

export default App;
