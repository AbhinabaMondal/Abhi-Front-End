import React, { Component } from 'react'
import Navbar from './Event Binding/Navbar-Binding'
import Message_Binding from './Event Binding/Message_Binding'
class App_Binding extends Component {
    render() {
        return (
            <>
                <Navbar />
                <h1>App Component</h1>
                <Message_Binding />
            </>
        )
    }
}

export default App_Binding