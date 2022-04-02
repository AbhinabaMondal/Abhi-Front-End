import React, { Component } from 'react'
import Navbar from './Contact App/Navbar_Contact'
import Index from './Contact App/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ContactApp from './Contact App/ContactApp'
class App_Contact extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/contact" element={<ContactApp />} />
                        <Route path="/index" element={<Index />} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App_Contact