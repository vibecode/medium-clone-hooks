import React from 'react'
import Routes from 'routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import TopBar from 'components/TopBar'
import { CurrentUserProvider } from 'contexts/currentUser'

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserProvider>
    </div>
  )
}

export default App
