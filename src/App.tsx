import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import ChildOne from "./ChildOne";

function App() {
  return (
    <Provider store={store}>
      <ChildOne />
    </Provider>
  );
}

export default App;
