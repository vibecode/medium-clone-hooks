import React from 'react'
import Routes from 'routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom'
import TopBar from 'components/TopBar'
import { CurrentUserProvider } from 'contexts/currentUser'
import CurrentUserChecker from 'components/CurrentUserChecker'

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Router>
            <TopBar />
            <Routes />
          </Router>
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  )
}

export default App
