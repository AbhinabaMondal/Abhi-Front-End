import React, { Component } from 'react'
import Navbar from './Form Handling/Navbar_Form'
import Registration from './Form Handling/Ragistration_Form'
class App_Form extends Component {
    render() {
        return (
            <>
                <Navbar />
                {/*   <h1>App Component</h1> */}
                <Registration />
            </>
        )
    }
}

export default App_Form