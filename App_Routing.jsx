import React, { Component } from 'react'
import Navbar from './Routing/Navbar_Routing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Routing/Home'
import About from './Routing/About'
import Contact from './Routing/Contact'

export class App_Routing extends Component {

    render() {
        return (
            <div>
                <Router>
                <Navbar />
              <Routes>
                  <Route path="/home" element= {<Home />} />
                  <Route path="/about" element= {<About />} />
                  <Route path="/contact" element= {<Contact />} />
                  </Routes>
                </Router>
            </div>
        )
      }
    }
    
export default App_Routing