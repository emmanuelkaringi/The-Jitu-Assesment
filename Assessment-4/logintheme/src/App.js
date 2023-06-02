import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { ThemeProvider } from './context/Theme';

class App extends Component {
  render() {
    return (
        <ThemeProvider>
          <div className="App">
            <LoginForm />
          </div>
        </ThemeProvider>
    );
  }
}

export default App;
