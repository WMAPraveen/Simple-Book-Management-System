import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Admin from './components/adminPage/admin'
import Home from './components/landingPage/Home'
import AuthForm from './components/UserAuthontication/AuthForm'

const App = () => {


  return (
    // <>
    // <Admin/>
    // </>

    // <>
    // <Home/>
    // </>
    // <>
    // <AuthForm/>
    // </>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
    </Router>

  )
}

export default App