import React from 'react'
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Dashboard from './components/Dashboard'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Header from './components/Header'
import JoinUs from './components/JoinUs'
import Projects from './components/Projects'

function App() {
    return (
        <div className="ueno">
            <Header/>
            <Dashboard/>
            <About/>
            <Projects/>
            <Blog/>
            <JoinUs/>
            <Footer1/>
            <Footer2/>            
        </div>
    )
}

export default App
