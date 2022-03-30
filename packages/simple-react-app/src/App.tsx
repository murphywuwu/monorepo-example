import React from 'react'
import logo from './logo.svg'
import './App.css'

import _ from 'lodash'
import { QueryPayload } from 'simple-shared-data'

import DarkMode from './react-dark-mode/src/DarkMode'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {_.toUpper('Learn React')}
        </a>
        <button
          onClick={() => {
            fetch('http://localhost:3001/', {})
              .then((res) => res.json())
              .then((data: QueryPayload) => console.log(data))
          }}
        >
          GET SOME DATA
        </button>
        <DarkMode />
      </header>
    </div>
  )
}

export default App
