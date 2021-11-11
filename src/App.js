import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import './App.css';
import routesConfig from './routesConfig';

class App extends Component {

  render() {
    return (
      <div>
        <div className="App">
          <Link to="/" >Home</Link>
          <Link to="/user" >User</Link>
        </div>
        <Routes>
          {routesConfig.map((value, key) => {
            return <Route
              key={key}
              path={value.path}
              element={value.element}              
              exact={value.exact}
            ></Route>
          })}
        </Routes>
      </div>
    );
  }
}

export default App;

