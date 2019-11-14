import React from 'react'

import Navbar from './components/Navbar'
import Routes from './routes'

const App = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <Routes />
      </div>
      <footer>
          <div className="footer">
            <span>© {new Date().getFullYear()} Natalie Estrada</span>
          </div>
      </footer>
    </div>
  )
}

export default App
