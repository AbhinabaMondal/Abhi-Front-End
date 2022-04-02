import React, { Component } from 'react'
import Navbar from './Axios/Navbar_Axios'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Axios/Home_Axios'
import About from './Axios/About_Axios'
import Contact from './Axios/Contact_Axios'
import User from './Axios/User_Axios'
export class App_Axios extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/user" element={<User />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App_Axios