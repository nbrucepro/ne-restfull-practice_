import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './components/pages/Login'
import SignupPage from './components/pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  {/* <Layout/>  */}
  <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  </div>
    </>
  )
}

export default App
