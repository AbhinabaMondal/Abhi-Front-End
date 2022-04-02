import React, { Component } from 'react'
import Navbar from './Life-Cycle/Navbar_LifeCY'
import Message from './Life-Cycle/Message_LifeCY'
import Employee from './Life-Cycle/Employe_LifeCY'
class App_LifeCY extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/*   <h1>App Component</h1> */}
                <Employee />
            </>
        )
    }
}

export default App_LifeCY