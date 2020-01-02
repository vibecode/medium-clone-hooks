import React from 'react'
import Routes from 'routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

export default App
