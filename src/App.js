import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <Layout welcome="Hello John!" />    
    );
  }
}
export default App;
